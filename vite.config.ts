import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import process from "node:process";
import path from "path";

// https://vitejs.dev/config/

const rootPath = process.cwd();
const basePath = path.join(rootPath, "./src");

export default defineConfig(() => {
    return {
        resolve: {
            alias: {
                src: basePath,
            },
        },
        plugins: [react()],
    };
});
