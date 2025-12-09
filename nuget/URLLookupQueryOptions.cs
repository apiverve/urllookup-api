using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.URLLookup
{
    /// <summary>
    /// Query options for the URL Lookup API
    /// </summary>
    public class URLLookupQueryOptions
    {
        /// <summary>
        /// The URL to lookup the location of. Include the https protocol
        /// Example: https://www.google.com
        /// </summary>
        [JsonProperty("url")]
        public string Url { get; set; }
    }
}
