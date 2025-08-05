import type { NextConfig } from "next"

const nextConfig: NextConfig = {
 webpack(config) {
  config.module.rules.push({
    test: /\.glsl$/,
    use: ['raw-loader', 'glslify-loader'], 
  })
  return config;
},
}

export default nextConfig
