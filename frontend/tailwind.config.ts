import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // <-- Dòng này rất quan trọng nếu bạn dùng App Router
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // <-- Thêm dòng này nếu code của bạn nằm trong thư mục src
  ],
  theme: {
    extend: {
      // 1. ĐỊNH NGHĨA MÀU SẮC
      colors: {
        // Thêm các màu của bạn vào đây
        "metro-blue": "#2563EB", // Màu xanh chính của logo
        "metro-blue-light": "#60A5FA", // Màu xanh nhạt hơn
        "dark-text": "#1E293B", // Màu chữ đậm như trong logo
        "muted-text": "#64748B", // Màu chữ phụ
      },
    },
  },
  plugins: [],
};
export default config;
