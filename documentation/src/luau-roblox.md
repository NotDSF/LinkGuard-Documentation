# Roblox Integration
> This is not intended as a security solution, we recommend using this in combination with Luarmor, or add your own security checks and use a secure obfuscator.
## Getting Started
1. Create a project with 'License Key' as your verification type
2. Paste our [loader](https://linkguard.cc/dist/luau.lua) to the top of your Roblox script
3. Change variable LG_PROJECT to your LinkGuard project name (ex: linkguard.cc/KhysHub/ would be KhysHub)
## Runtime Variables
These variables will be set upon a successful license validation for LinkGuard
- **LG_USER_IP**: The user's IP address
- **LG_USER_DISCORD_ID**: The user's Discord ID
- **LG_USER_EXPIRY**: The UNIX timestamp of license expiration 
- **LG_USER_KEY**: The provided license key
- **LG_IS_VALID**: Default true, will be set to false when the license expires
## Distribution
### Setting up Luarmor (skip if you don't use it)
1. For the script you've added our loader too, set it to FFA on Luarmor (Free For All)
2. This will allow everybody to use your script, not to worry though our loader will allow regular entry for your Luarmor users, and perform LinkGuard license validation for none Luarmor users.
### Giving users the loadstring
We're going to assume you distribute your script in a loadstring, user's will need to define their license key before your script executes, you can do this by giving your users a script such as this: 
```lua
trial_key="";
loadstring(game:HttpGet("script_url"))();
```               
> Instruct your users to paste the license key they receive after completion in-between the double quotes on the first line                        