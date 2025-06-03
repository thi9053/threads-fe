import { CodegenConfig } from "@graphql-codegen/cli";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const CORE_DIR = path.resolve(__dirname, "src/domain");

const modules = fs
  .readdirSync(CORE_DIR, { withFileTypes: true })
  .filter((dir) => dir.isDirectory())
  .map((dir) => dir.name);

const generatesConfig = modules.reduce(
  (config, moduleName) => {
    const modulePath = `src/domain/${moduleName}/graphql`;
    const outputFile = `${modulePath}/__generated__/`;

    config[outputFile] = {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
      documents: [
        `${modulePath}/queries/**/*.ts`,
        `${modulePath}/mutations/**/*.ts`,
      ],
      plugins: [],
      config: {
        avoidOptionals: true,
        maybeValue: "T | undefined",
        scalars: {
          DateTime: "string",
        },
      },
    };

    return config;
  },
  {} as CodegenConfig["generates"]
);

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  documents: [
    "src/domain/**/graphql/queries/**/*.ts",
    "src/domain/**/graphql/mutations/**/*.ts",
  ],
  generates: generatesConfig,
};

export default config;
