using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_fetch_from_DB.Models
{
    //model for Admin Login
    public class AdministratorLogin
    {
        [Key]
        public int admin_id { get; set; }
        public string admin_email { get; set; }
        public string admin_password { get; set; }
    }
}
