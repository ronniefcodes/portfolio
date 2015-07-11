using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api.Models
{
    public class Technology
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public Technology(int id, string name)
        {
            this.Id = id;
            this.Name = name;
        }
    }
}