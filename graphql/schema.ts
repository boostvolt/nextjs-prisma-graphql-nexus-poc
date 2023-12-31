import { makeSchema, connectionPlugin } from "nexus";
import { join } from "path";
import * as types from "./types";

export const schema = makeSchema({
  types,
  plugins: [connectionPlugin()],
  outputs: {
    typegen: join(
      process.cwd(),
      "node_modules",
      "@types",
      "nexus-typegen",
      "index.d.ts"
    ),
    schema: join(process.cwd(), "graphql/generated", "schema.graphql"),
  },
  contextType: {
    module: join(process.cwd(), "graphql/context.ts"),
    export: "Context",
  },
});
