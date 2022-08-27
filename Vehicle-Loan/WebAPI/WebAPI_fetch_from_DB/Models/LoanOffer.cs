using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_fetch_from_DB.Models
{
    //model for loan offer (Database Table name: Loan_Offer)
    public class LoanOffer
    {
        [Key]
        public int loan_offer_id { get; set; }
        public int user_ref_id { get; set; }
        public decimal loan_amt { get; set; } 
        public int best_rate { get; set; } = 10;
        public string account_type { get; set; }
        public int processing_fee { get; set; } = 100;
        public string product_type { get; set; }
    }
}
