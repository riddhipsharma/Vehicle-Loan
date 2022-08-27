using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI_fetch_from_DB.Models;

namespace WebAPI_fetch_from_DB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        public AdminController(UserDBContext context)
        {
            _context = context;
        }
        public UserDBContext _context { get; }


        //method for admin who is able to see all the registered customers/clients
        // GET : http://localhost:22508/api/Admin/AllClients
        [HttpGet]
        [Route("AllClients")]
        public IEnumerable<User> GetAllClients()
        {
            return _context.User_Details.ToList();
        }

        //method for admin who is able to see admin details on admin dashboard
        // GET : http://localhost:22508/api/Admin/AdminDetails
        [HttpGet]
        [Route("AdminDetails")]
        public IEnumerable<AdministratorLogin> AdminDetails()
        {
            return _context.Admin_Details.ToList();
        }

        //method for displaying all the application forms
        [HttpGet]
        [Route("AllApplications")]
        //GET : http://localhost:22508/api/Admin/AllApplications
        public IEnumerable<AppForm> AllApplication()
        {
            return _context.Application_Form.ToList();
        }

        //method for displaying status of all the application forms submitted
        [HttpGet]
        [Route("AllApplicationsStatus")]
        //GET : http://localhost:22508/api/Admin/AllApplicationsStatus
        public IEnumerable<AppStatus> AllApplicationStatus()
        {
            return _context.Application_Status.ToList();
        }


        //method for adding verification status for particular customer application form
        [HttpPost]
        [Route("ApplicationStatus")]
        // POST : http://localhost:22508/api/Admin/ApplicationStatus
        public ActionResult Post(AppStatus status)
        {

            _context.Application_Status.Add(status);
            _context.SaveChanges();
            return Ok("Success");
            //return Ok($"Application Status updated for {status.user_ref_id} with application id {status.application_id}");

        }

        //method for displaying all the application forms with status as rejected 
        [HttpGet]
        [Route("ApplicationStatus/{status}")]
        //GET : http://localhost:22508/api/Admin/ApplicationStatus/Rejected
        //GET : http://localhost:22508/api/Admin/ApplicationStatus/Approved
        //GET : http://localhost:22508/api/Admin/ApplicationStatus/NA
        public IEnumerable<AppStatus> RejectedList(string status)
        {
            List<AppStatus> rejectedStatus = new List<AppStatus>();

            foreach( var appStatus in _context.Application_Status.ToList())
            {
                if(appStatus.application_status == status)
                {
                    rejectedStatus.Add(appStatus);
                }
            }
            return rejectedStatus; 
        }

        //method for a viewing status details of a particular application form
        //GET : http://localhost:22508/api/Admin/ApplicationFormStatus/1
        [HttpGet]
        [Route("ApplicationFormStatus/{id}")]
        public ActionResult AppStatus(int id)
        {
            var data = _context.Application_Status.FirstOrDefault(u => u.user_ref_id == id);
            if (data == null)
                return NotFound();

            else
                return Ok(data);
        }

        //method for updating the verification status
        //PUT : http://localhost:22508/api/Admin/UpdateStatus/801
        [HttpPut("{id}")]
        [Route("UpdateStatus/{id}")]
        public ActionResult UpdateStatus(int id, AppStatus modifiedstatus)
        {
            var statusid = _context.Application_Status.FirstOrDefault(u => u.user_ref_id == id);
            if (statusid != null)
            {
                statusid.application_status = modifiedstatus.application_status;
                statusid.rejection_reason = modifiedstatus.rejection_reason;
                _context.SaveChanges();
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        //method for displaying admin details on admin dashboard
        //GET : http://localhost:22508/api/Admin/AdminProfile/test1@gmail.com
        [HttpGet]
        [Route("AdminProfile/{email}")]
        public ActionResult AdminProfile(string email)
        {
            var data = _context.Admin_Details.FirstOrDefault(u => u.admin_email == email);
            if (data == null)
                return NotFound();

            else
                return Ok(data);
        }

        //method for displaying userid and its applicationid of all the application forms submitted
        //GET : http://localhost:22508/api/Admin/AllCustomerAppForm
        [HttpGet()]
        [Route("AllCustomerAppForm")]
        public ActionResult<IEnumerable<allappform>> Get()
        {
            var data = _context.All_AppForm.FromSqlInterpolated($"SP_CustAppForm");
            return Ok(data);
        }

        //method for displaying user details and his application form details for a particular customer
        //GET : http://localhost:22508/api/Admin/CustomerAppForm/1
        [HttpGet]
        [Route("CustomerAppForm/{id}")]
        public ActionResult CustomerAppForm(int id)
        {
            var data = _context.Cust_AppForm.FromSqlInterpolated($"SP_CustAppFormByAId {id}");
            if (data == null)
                return NotFound();

            else
                return Ok(data);
        }
    }
}
