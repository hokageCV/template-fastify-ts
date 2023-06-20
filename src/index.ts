import buildServer from "./utils/server";

console.log("hey hey hey");

async function main() {
  const app = await buildServer();

  app.listen({
    port: 3000,
  });
  console.log("Server is running on port 3000");
}

main();
