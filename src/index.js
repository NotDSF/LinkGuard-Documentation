const path = require("path");
const fastify = require("fastify")();

fastify.register(require("@fastify/static"), {
    root: path.join(__dirname, "public")
});

(async () => {
    try {
        await fastify.listen({ port: 8080, host: "0.0.0.0" });
        console.log("Server now listenting to port 8080!");
    } catch (er) {
        console.log(er);
    }
})();