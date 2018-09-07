using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace DatingApp.API.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public AuthController(IAuthRepository repo,
        IConfiguration config,
        IMapper mapper,
        UserManager<User> userManager,
        SignInManager<User> signInManager)
        {
            _repo = repo;
            _config = config;
            _mapper = mapper;
            _userManager = userManager;
            _signInManager = signInManager;
        }


        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto dot)
        {
            dot.Username = dot.Username.ToLower();

            if (await _repo.UserExist(dot.Username))
            {
                return BadRequest("User exist");
            }

            var userToCreate = new User
            {
                UserName = dot.Username
            };

            var createdUser = await _repo.Register(userToCreate, dot.Password);

            return StatusCode(200);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto dot)
        {
            // var userFromRepo = await _repo.Login(dot.Username, dot.Password);
            // if (userFromRepo == null)
            // {
            //     return Unauthorized();
            // }
            var user = await _userManager.FindByNameAsync(dot.Username);
            var result = await _signInManager
            .CheckPasswordSignInAsync(user, dot.Password, false);
            if (result.Succeeded)
            {
                var appUser = await _userManager.Users.Include(p => p.Photos)
                .FirstOrDefaultAsync(u => u.NormalizedUserName == dot.Username.ToUpper());
                var userToReturn = _mapper.Map<UserForListDto>(appUser);

                return Ok(new
                {
                    token = GenerateJwtToken(appUser),
                    userToReturn
                });
            }

            return Unauthorized();
        }

        private string GenerateJwtToken(User user)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.UserName)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}