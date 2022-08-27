using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_fetch_from_DB.Models
{
    public class UserDBContext : DbContext
    {
        public UserDBContext(DbContextOptions<UserDBContext> options) : base(options)
        {

        }

        public DbSet<User> User_Details { get; set; }
        public DbSet<AdministratorLogin> Admin_Details { get; set; }
        public DbSet<LoanOffer> Loan_Offer { get; set; }
        public DbSet<AppForm> Application_Form { get; set; }
        public DbSet<AppStatus> Application_Status { get; set; }
        public DbSet<CustAppForm> Cust_AppForm { get; set; }
        public DbSet<allappform> All_AppForm { get; set; }

        

    }
}
