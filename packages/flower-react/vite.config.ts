import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    emptyOutDir: true,
    cssCodeSplit: true,
    minify: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@flower/react",
      formats: ["es"],
      fileName: "[name]",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      // input: glob.sync("src/**/*.{ts,tsx}"),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        // preserveModules: true,
        // entryFileNames: (entry) => {
        //   const { name, facadeModuleId } = entry;
        //   const fileName = `${name}.js`;
        //   if (!facadeModuleId) {
        //     return fileName;
        //   }
        //   const relativeDir = relative(
        //     resolve(__dirname, "src"),
        //     dirname(facadeModuleId)
        //   );
        //   console.log(
        //     "asdasd",
        //     join(relativeDir, fileName).split(sep).join("//")
        //   );

        //   return join(relativeDir, fileName).split(sep).join("/");
        // },
      },
    },
    cssTarget: "chrome85",
    sourcemap: true,
  },
});
