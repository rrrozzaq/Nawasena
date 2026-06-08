/// <reference types="vite/client" />

declare module "*.css?url" {
  const url: string;
  export default url;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}
