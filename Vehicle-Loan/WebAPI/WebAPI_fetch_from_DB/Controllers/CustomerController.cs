using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI_fetch_from_DB.Models;

namespace WebAPI_fetch_from_DB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {

        public CustomerController(UserDBContext context)
        {
            _context = context;
        }
        public UserDBContext _context { get; }

        //method for displaying user details on user dashboard
        //GET : http://localhost:22508/api/Customer/UserProfile/test1@gmail.com
        [HttpGet]
        [Route("UserProfile/{email}")]
        public ActionResult UserProfile(string email)
        {
            var data = _context.User_Details.FirstOrDefault(u => u.user_email == email);
            if (data == null)
                return NotFound();

            else
                return Ok(data);
        }

        //method for updating user profile
        //PUT : http://localhost:22508/api/Customer/UpdateProfile/1
        [HttpPut("{email}")]
        [Route("UpdateProfile/{id}")]
        public ActionResult UpdateProfile(string id, User modifieduser)
        {
            var statusid = _context.User_Details.FirstOrDefault(u => u.user_email == id);
            if (statusid != null)
            {
                statusid.user_email = modifieduser.user_email;
                //statusid.rejection_reason = modifiedstatus.rejection_reason;
                _context.SaveChanges();
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        [Route("LoanOffer")]
        //method for accepting loan offer 
        // POST : http://localhost:22508/api/Customer/LoanOffer
        public ActionResult Post(LoanOffer offer)
        {

            _context.Loan_Offer.Add(offer);
            _context.SaveChanges();
            return Ok("Successfully applied for loan offer");

        }


        //GET : http://localhost:22508/api/Customer/OfferDetails/1
        //method for getting loan offer details taken by a particular customer
        [HttpGet]
        [Route("OfferDetails/{id}")]
        public ActionResult OfferDetails(int id)
        {
            var data = _context.Loan_Offer.FirstOrDefault(u => u.user_ref_id == id);
            if (data == null)
                return NotFound();

            else
                return Ok(data);
        }

        [HttpPost]
        [Route("ApplicationForm")]
        //POST : http://localhost:22508/api/Customer/ApplicationForm
        //method for submitting Customer Application Form
        public ActionResult Post(AppForm application)
        {

            _context.Application_Form.Add(application);
            _context.SaveChanges();
            return Ok("Application Form Submitted Successfully!!!");

        }

    }
}
