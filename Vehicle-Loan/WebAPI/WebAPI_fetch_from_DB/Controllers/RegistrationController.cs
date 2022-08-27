using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using WebAPI_fetch_from_DB.Models;

namespace WebAPI_fetch_from_DB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        public RegistrationController(UserDBContext context)
        {
            _context = context;
        }
        public UserDBContext _context { get; }


        //method for customer login 
        // POST : http://localhost:22508/api/Registration/Login
        [HttpPost]
        [Route("Login")]
        public ActionResult Login(UserLogin userLogin)
        {
            var data = _context.User_Details.FirstOrDefault(s => s.user_email.Equals(userLogin.user_email) && s.user_password.Equals(userLogin.user_password));

            if (data != null)
            {
                //var str = $"{userLogin.user_email} Logged in";
                return Ok("Success");
            }

            return Ok("Failure");

        }




        //method for customer registeration
        // POST : http://localhost:22508/api/Registration/Register
        [HttpPost]
        [Route("Register")]
        public ActionResult Post(User newreg)
        {

            _context.User_Details.Add(newreg);
            _context.SaveChanges();
            return Ok("Registration Successful!!!");

        }

        //method for admin login
        [HttpPost]
        [Route("AdminLogin")]
        // POST : http://localhost:22508/api/Registration/AdminLogin
        public ActionResult AdminLogin(AdministratorLogin administratorLogin)
        {
            var data = _context.Admin_Details.FirstOrDefault(s => s.admin_email.Equals(administratorLogin.admin_email) && s.admin_password.Equals(administratorLogin.admin_password));

            if (data != null)
            {
                //var str = $"{userLogin.user_email} Logged in";
                return Ok("Success");
            }

            return Ok("Failure");

        }
    }
}
