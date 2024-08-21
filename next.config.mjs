/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zdvgtqrfmtgutdqjrscb.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
