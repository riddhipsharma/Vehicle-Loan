using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_fetch_from_DB.Models
{
    //model for application status (Database Table name: Application_Status)
    public class AppStatus
    {
        [Key]
        public int status_id { get; set; }
        public int user_ref_id { get; set; }
        public int application_id { get; set; }
        public int admin_ref_id { get; set; } = 100;
        public string application_status { get; set; } = "NA";
        public string rejection_reason { get; set; } = "NA";
    }
}
