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
    public class RolesController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<Role> _roleManager;

        public RolesController(DataContext dataContext, 
        UserManager<User> userManager,
        RoleManager<Role> roleManager)
        {
            _context = dataContext;
            _userManager = userManager;
            _roleManager = roleManager;
        }

        [HttpGet]
        public IActionResult GetRoles()
        {
            var roles = _context.Roles.ToListAsync().Result;
           return Ok(roles);
        }

        [HttpPost]
        public IActionResult AddRole(string name)
        {
          var role = new Role { Name = name};
          _roleManager.CreateAsync(role).Wait();
           return Ok();
        }
        
        [HttpDelete]
        public IActionResult DeleteRole()
        {
           return Ok();
        }
    }
}