using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_fetch_from_DB.Models
{
    //model for the customer details and details of his/her application form (Database SP: SP_CustAppFormByAID 
    public class CustAppForm
    {
        
        [Key]
        public int application_id { get; set; }
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

        


        public string vehicle_make { get; set; }
        [Required(ErrorMessage = "Please enter the Vehicle Model!")]
        [StringLength(20)]
        [Display(Name = "Vehicle Model")]
        public string vehicle_model { get; set; }
        [Required(ErrorMessage = "Please enter the Vehicle Type!")]
        [StringLength(20)]
        [Display(Name = "Vehicle Type")]
        public string vehicle_type { get; set; }
        [Required(ErrorMessage = "Please enter the Showroom Price!")]
        [Display(Name = "Showroom Price")]
        public decimal showroom_price { get; set; }
        [Required(ErrorMessage = "Please enter the On Road Price!")]
        [Display(Name = "On Road Price")]
        public decimal on_road_price { get; set; }
        [Required(ErrorMessage = "Please enter the Type of Employement!")]
        [StringLength(20)]
        [Display(Name = "Type of Employment")]
        public string type_of_emp { get; set; }
        [Required(ErrorMessage = "Please enter your Annual Salary!")]
        [Display(Name = "Annual Salary")]
        public decimal annual_sal { get; set; }
        [Required(ErrorMessage = "Please enter the Exisiting Emi!")]
        [StringLength(20)]
        [Display(Name = "Existing Emi")]
        public string existing_emi { get; set; }
        [Required(ErrorMessage = "Please enter the Loan Amount!")]
        [Display(Name = "Loan Amount")]
        public decimal amount { get; set; }
        [Required(ErrorMessage = "Please enter the Tenure of the Loan!")]
        [Display(Name = "Loan Tenure")]
        public int duration { get; set; }
        public int interest { get; set; } = 10;
        public DateTime application_date { get; set; }
        public string upload_aadhar { get; set; }
        public string upload_pan { get; set; }
        public string upload_photo { get; set; }
        public string upload_salary_slip { get; set; }
        public string application_status { get; set; } = "NA";
        public string rejection_reason { get; set; } = "NA";
    }
}
