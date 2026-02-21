import { defineConfig } from "jsrepo";

export default defineConfig({
  registries: [
    {
      url: "https://reactbits.dev/ts-tailwind",
    },
  ],
  paths: {
    "*": "components/reactbits",
  },
});
