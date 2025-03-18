import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import express, { Request, Response } from "express";
import { z } from "zod";

// Initialize the MCP server
const server = new McpServer({
  name: "GreetingServer",
  version: "1.0.0",
});

// Define the Greeting Tool
server.tool(
  "greet",
  {
    name: z.string().describe("The name of the person to greet"),
  },
  async ({ name }: { name: string }) => {
    return {
      content: [{ type: "text", text: `Hey, ${name}! Nice to meet you!` }],
    };
  }
);

// Function to start the server with a chosen transport
async function startServer(transportType: "stdio" | "sse") {
  if (transportType === "stdio") {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.log("MCP Server running with stdio transport");
  } else if (transportType === "sse") {
    const app = express();
    let transport: SSEServerTransport | null = null;

    app.get("/sse", async (req: Request, res: Response) => {
      transport = new SSEServerTransport("/messages", res);
      await server.connect(transport);
    });

    app.post("/messages", async (req: Request, res: Response) => {
      if (transport) {
        await transport.handlePostMessage(req, res);
      }
    });

    app.listen(8765, () => {
      console.log("MCP Server running with SSE on http://localhost:8765/sse");
    });
  }
}

// Start the server (choose "stdio" or "sse" based on your preference)
const transportType = process.argv[2] === "sse" ? "sse" : "stdio";
startServer(transportType);
