import { Client, Context } from "@aragon/sdk-client";

const context = new Context({
  network: "mainnet",
  web3Providers: "https://cloudflare-eth.com",
});

const client = new Client(context);

const daos = await client.methods.getDaos({ skip: 0, limit: 10 });

console.log("DAOs:", daos);
