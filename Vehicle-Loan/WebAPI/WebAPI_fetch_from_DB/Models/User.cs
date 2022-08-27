using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_fetch_from_DB.Models
{
    //model for Customer registration (Database Table name: User_Details) 
    public class User
    {
        [Key]
        public int user_id { get; set; } //Id

        [Required(ErrorMessage = "First name is must to enter")]
        [StringLength(20)]
        [Display(Name = "First Name")]
        public string user_firstname { get; set; }

        [Required(ErrorMessage = "Last name is must to enter")]
        [StringLength(20)]
        [Display(Name = "Last Name")]

        public string user_lastname { get; set; }

        [Required]
        [EmailAddress]
        public string user_email { get; set; }

        [Required(ErrorMessage = "Phone number should be of 10 characters")]
        [Phone]
        [StringLength(10)]
        public string user_phonenum { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime user_dob { get; set; }

        [Required]
        [StringLength(10)]
        public string user_gender { get; set; }

        [Required]
        [StringLength(150)]
        public string user_address { get; set; }

        [Required]
        [StringLength(150)]
        public string user_city { get; set; }

        [Required]
        [StringLength(150)]
        public string user_state { get; set; }

        [Required]
        [StringLength(10)]
        public string user_pincode { get; set; }

        [Required]
        public string user_password { get; set; }


    }
}
