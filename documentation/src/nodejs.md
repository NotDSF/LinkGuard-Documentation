# NodeJS
This page teaches you how to use LinkGuard in your NodeJS applications

```js
const DiscordID = "2323";
const ProjectName = "23";

const packet = await fetch(`https://linkguard.cc/v1/project/${ProjectName}/discord/${DiscordID}`);
if (packet.status !== 200) {
    return console.log("Invalid License");
}

const body = await packet.json();
if (!body.valid) {
    return console.log("Invalid License");
}

console.log("Valid License:", body);
```