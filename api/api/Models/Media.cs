using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api.Models
{
    public class Media
    {
        public int Id { get; set; }
        public string Caption { get; set; }
        public bool IsMobile { get; set; }
        public string Url { get; set; }
        public int? Previous { get; set; }
        public int? Next { get; set; }

        public Media(int id, string caption, bool ismobile, string url, int? previous = null, int? next = null)
        {
            this.Id = id;
            this.Caption = caption;
            this.IsMobile = ismobile;
            this.Url = url;
            this.Previous = previous;
            this.Next = next;
        }
    }
}