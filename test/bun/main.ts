import { Client } from "traq-bot-ts";

const client = new Client({ token: process.env.TOKEN });

client.on("MESSAGE_CREATED", ({ body }) => {
  const {
    user: { name },
    plainText,
  } = body.message;
  console.log(`@${name} < ${plainText}`);
});

client.listen(() => {
  console.log("ok");
  process.exit(0);
});
