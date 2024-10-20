import { Client } from "traq-bot-ts";

const client = new Client({ token: Deno.env.get("TOKEN") });

client.on("MESSAGE_CREATED", ({ body }) => {
  const {
    user: { name },
    plainText,
  } = body.message;
  console.log(`@${name} < ${plainText}`);
});

client.listen(() => {
  console.log("ok");
  Deno.exit(0);
});
