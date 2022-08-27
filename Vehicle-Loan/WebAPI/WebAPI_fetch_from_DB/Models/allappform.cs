using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_fetch_from_DB.Models
{
    //model for displaying all application forms by applicationid and userid (SP: SP_CustAppForm)
    public class allappform
    {
        [Key]
        public int application_id { get; set; }
        public int user_id { get; set; }
    }
}
