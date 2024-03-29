// relay.config.js
module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: "./src",
  schema: "./data/schema.graphql",
  language: "typescript",
  eagerEsModules: true,
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
};
