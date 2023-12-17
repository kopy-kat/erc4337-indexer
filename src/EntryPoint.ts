import { ponder } from "@/generated";

ponder.on("EntryPoint:AccountDeployed", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("EntryPoint:BeforeExecution", async ({ event, context }) => {
  console.log(event.args);
});
