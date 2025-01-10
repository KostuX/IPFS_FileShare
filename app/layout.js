import "@/style/globals.css";
import { site_cfg } from "@/reusable/variables/site";

export const metadata = {
  title: site_cfg.title,
  description: site_cfg.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
