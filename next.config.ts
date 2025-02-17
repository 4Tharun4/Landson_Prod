import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites(){
    return [{
      source:"/api/:path*",
      destination:`${process.env.NEXT_PUBLIC_PROXEY_DOMAIN}/api/:path*` //no ports in production
    }]
    
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "https://www.landsonagri.in/" }, // Change * to specific domain in production
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
        ],
      },
    ];
  },

};

export default nextConfig;
