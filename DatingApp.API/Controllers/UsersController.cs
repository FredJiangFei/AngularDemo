using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Helpers;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    // [Authorize(Roles = "Member")]
    [ServiceFilter(typeof(LogUserActivity))]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;
        private readonly DataContext _dataContext;
        private readonly UserManager<User> _userManager;

        public UsersController(
            IDatingRepository repo, 
            IMapper mapper, 
            DataContext dataContext,
            UserManager<User> userManager)
        {
            _mapper = mapper;
            _dataContext = dataContext;
            _userManager = userManager;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers([FromQuery]UserParams userParams)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            userParams.UserId = currentUserId;
            var users = await _repo.GetUsers(userParams);
            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

            Response.AddPagination(users.CurrentPage, users.PageSize,
                users.TotalCount, users.TotalPages);

            return Ok(usersToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            var userToReturn = _mapper.Map<UserForDetailedDto>(user);
            return Ok(userToReturn);
        }

        [HttpGet("{id}/roles")]
        public async Task<IActionResult> GetUserRoles(int id)
        {
            var user = await _repo.GetUserWithRoles(id);
           return Ok(user);
        }

        [HttpPut("{id}/editRoles")]
        public async Task<IActionResult> GetUserRoles(int id, RoleEditDto dto)
        {
            var user = await _userManager.FindByIdAsync(id.ToString());

            var userRoles = await _userManager.GetRolesAsync(user);

            var addedRoles = dto.RoleNames.Except(userRoles);
            var addRolesResponse = await _userManager.AddToRolesAsync(user, addedRoles);
            if(!addRolesResponse.Succeeded){
                return BadRequest("Falied to add roles");
            }

            var removedRoles = userRoles.Except(dto.RoleNames);
            var removeRolesResponse = await _userManager.RemoveFromRolesAsync(user, removedRoles);
             if(!removeRolesResponse.Succeeded){
                return BadRequest("Falied to remove roles");
            }
            
            return Ok(await _userManager.GetRolesAsync(user));
        }

        [HttpPut("{id}/roles")]
        public async Task<IActionResult> UpdateUserRoles(int id)
        {
            var user = await _repo.GetUserWithRoles(id);
           return Ok(user);
        }

         [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var userFromRepo = await _repo.GetUser(id);

            _mapper.Map(userForUpdateDto, userFromRepo);

            if (await _repo.SaveAll())
                return NoContent();
            
            throw new System.Exception($"Updating user {id} failed on save");
        }

         [HttpPost("{id}/like/{recipientId}")]
        public async Task<IActionResult> LikeUser(int id, int recipientId)
        {
            var like = await _repo.GetLike(id, recipientId);
            if (like != null)
                return BadRequest("You already like this user");
            
            if (await _repo.GetUser(recipientId) == null)
                return NotFound();

            like = new Like
            {
                LikerId = id,
                LikeeId = recipientId
            };
            _repo.Add<Like>(like);

            if (await _repo.SaveAll())
                return Ok();
            
            return BadRequest("Failed to like user");
        }
    }
}