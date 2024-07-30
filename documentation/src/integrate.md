# LinkGuard Integration
This page will guide you on how to integrate LinkGuard into your application

## License Key                                                    
**GET** `https://linkguard.cc/v1/project/:name/licenses/:license`

If the provided license is found we return code 200 and provide a JSON response with details about the license
```json
{
  "valid": true,
  "license_key": "d697b2b8-38da-4d40-856f-b50061c85ed7",
  "expire": 1720858267941
}
```

If the license cannot be found we return code 404 with JSON response:
```json
{
  "error": "Not Found"
}
```

## Discord ID                                                    
**GET** `https://linkguard.cc/v1/project/:name/discord/:id`

If the ID is found we return code 200 and provide a JSON response with details about the session
```json
{
  "valid": true,
  "discord_id": "787086729470541844",
  "expire": 1720858267941
}
```

If the ID cannot be found we return code 404 with JSON response:
```json
{
  "error": "Not Found"
}
```