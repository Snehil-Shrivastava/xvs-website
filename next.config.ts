import { withPayload } from "@payloadcms/next/withPayload";
import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.1.105"],
  serverExternalPackages: ["sharp"],
  cacheComponents: true,
  // async redirects() {
  //   if (process.env.VERCEL_ENV === "production") {
  //     return [
  //       {
  //         source: "/blog/:path*",
  //         destination: "/",
  //         permanent: false,
  //       },
  //     ];
  //   }
  //   return [];
  // },
};

export default withPayload(withNextVideo(nextConfig));
