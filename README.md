# MCP Montano Server
[![smithery badge](https://smithery.ai/badge/@lucasmontano/mcp-montano-server)](https://smithery.ai/server/@lucasmontano/mcp-montano-server)

A TypeScript-based server project.

## Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)
- Cursor IDE (recommended)

## Installation

### Installing via Smithery

To install MCP Montano Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@lucasmontano/mcp-montano-server):

```bash
npx -y @smithery/cli install @lucasmontano/mcp-montano-server --client claude
```

### Manual Installation
1. Clone the repository:
```bash
git clone git@github.com:lucasmontano/mcp-montano-server.git
cd mcp-montano-server
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

1. Development mode:
```bash
npm run dev
```

2. Build and run in production mode:
```bash
npm run build
npm start
```

## Adding MCP to Cursor

```json
{
  "mcpServers": {    
    "montano-mcp-server": {
      "command": "node",      
      "args": ["path/to/mcp-montano-server/build/index.js"]
    }
  }
}
```

## Project Structure

```
mcp-montano-server/
├── src/           # Source code
├── build/         # Compiled JavaScript files
├── node_modules/  # Dependencies
├── package.json   # Project configuration and dependencies
└── tsconfig.json  # TypeScript configuration
```

## License

This project is licensed under the MIT License - see the LICENSE file for details. 