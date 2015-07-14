using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api.Models
{
    public class Contact
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        [JsonIgnore]
        public int? PersonId { get; set; }
        [JsonIgnore]
        public int? TypeId { get; set; }
        [JsonProperty(PropertyName = "value")]
        public string Value { get; set; }
        [JsonProperty(PropertyName = "image")]
        public string Image { get; set; }
        [JsonProperty(PropertyName = "icon")]
        public string Icon { get; set; }
        [JsonProperty(PropertyName = "type")]
        public Contact_Type Type { get; set; }


        public Contact(int id, string value, string image = "", string icon = "", Contact_Type type = null, int? typeid = null, int? personid = null)
        {
            this.Id = id;
            this.Value = value;
            this.Image = image;
            this.Icon = icon;
            this.Type = type;
            this.TypeId = typeid;
            this.PersonId = personid;
        }
    }
}