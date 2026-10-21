# URL Lookup API - Ruby Gem

URL Lookup resolves any web address to its hosting server IP address, country, and continent in real time. Paid plans add city, state, coordinates, timezone, and EU membership status.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_urllookup'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_urllookup
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_urllookup'

# Initialize the client
client = APIVerve::Urllookup::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ url: "https://www.merriam-webster.com/dictionary/documentation" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ url: "https://www.merriam-webster.com/dictionary/documentation" })
  puts response["data"]
rescue APIVerve::Urllookup::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Urllookup::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Urllookup::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "range": "",
    "country": "US",
    "region": "",
    "city": "Cheney",
    "timezone": "America/Chicago",
    "state": "Kansas",
    "zipcode": "67025",
    "coordinates": [
      37.751,
      -97.822
    ],
    "url": "https://www.merriam-webster.com/dictionary/documentation",
    "domain": "www.merriam-webster.com",
    "ip": "104.20.45.199",
    "countryName": "United States",
    "continent": "NA",
    "continentName": "North America",
    "accuracyRadius": 1000,
    "isEU": false
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/urllookup?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/urllookup?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/urllookup?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
