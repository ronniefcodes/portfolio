using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api.Models
{
    public class Media
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        [JsonIgnore]
        public int? ProjectId { get; set; }
        [JsonProperty(PropertyName = "caption")]
        public string Caption { get; set; }
        [JsonProperty(PropertyName = "is_mobile")]
        public bool IsMobile { get; set; }
        [JsonProperty(PropertyName = "url")]
        public string Url { get; set; }
        [JsonProperty(PropertyName = "previous")]
        public int? Previous { get; set; }
        [JsonProperty(PropertyName = "next")]
        public int? Next { get; set; }

        public Media(int id, string caption, bool ismobile, string url, int? previous = null, int? next = null, int? projectid = null)
        {
            this.Id = id;
            this.ProjectId = projectid;
            this.Caption = caption;
            this.IsMobile = ismobile;
            this.Url = url;
            this.Previous = previous;
            this.Next = next;
        }
    }
}