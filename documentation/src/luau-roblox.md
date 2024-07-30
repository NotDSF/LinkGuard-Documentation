# Luau/Roblox
This page teaches you how to use LinkGuard in your Luau/Roblox scripts

## Before Obfuscation
Before you obfuscate your script, insert this at the very top of the script and then obfuscate
*(make sure you update `PROJECT_NAME`)*
```lua
local LinkGuard = loadstring(game:HttpGet("https://linkguard.cc/dist/luau.lua"))();

if not LinkGuard:ValidateLicense("PROJECT_NAME", Key) then
    game.Players.LocalPlayer:Kick("Invalid License");
    return;
end;
```

## After Obfuscation
User's will need to set global `Key` with their license key from LinkGuard, you can make this easier by distributing your script in a loadstring:
```lua
getgenv().Key = "LICENSE_KEY";
loadstring(game:HttpGet("SCRIPT_URL"))();
```