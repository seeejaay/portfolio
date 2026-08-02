import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Configures experimental/server action origin checks for local testing
  allowedDevOrigins: ["192.168.0.130"],
}

export default nextConfig
