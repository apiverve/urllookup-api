# URL Lookup API - PHP Package

URL Lookup resolves any web address to its hosting server IP address, country, and continent in real time. Paid plans add city, state, coordinates, timezone, and EU membership status.

## Installation

Install via Composer:

```bash
composer require apiverve/urllookup
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Urllookup\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['url' => 'https://www.merriam-webster.com/dictionary/documentation']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Urllookup\Client;
use APIVerve\Urllookup\Exceptions\APIException;
use APIVerve\Urllookup\Exceptions\ValidationException;

try {
    $response = $client->execute(['url' => 'https://www.merriam-webster.com/dictionary/documentation']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/urllookup?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/urllookup?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/urllookup?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
