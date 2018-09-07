using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
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
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly DataContext _context;

        public AdminController(DataContext dataContext)
        {
            _context = dataContext;
        }

        [Authorize(Policy = "RequireAdminRole")]
        [HttpGet("userWithRoles")]
        public IActionResult GetUsersWithRoles()
        {
           return Ok("Only admins can see this");
        }

        [Authorize(Policy = "ModerateRole")]
        [HttpGet("photosForModeration")]
        public IActionResult GetPhotosForModeration()
        {
           return Ok("Admins and moderators can see this");
        }

        [HttpGet("roles")]
        public IActionResult GetRoles()
        {
            var roles = _context.Roles.Select(x => x.Name).ToListAsync().Result;
           return Ok(roles);
        }
    }
}