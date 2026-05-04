import { Client, Context } from "@aragon/sdk-client";

const context = new Context({
  network: "mainnet",
  web3Providers: "https://cloudflare-eth.com",
});

const client = new Client(context);

try {
  const daos = await client.methods.getDaos({ skip: 0, limit: 10 });
  console.log("DAOs:", daos);
} catch (err) {
  console.error("Error fetching DAOs:", err.message);
  console.error("The Aragon subgraph endpoint may be unavailable or deprecated.");
}
