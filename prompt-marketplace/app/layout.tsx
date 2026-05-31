import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prompt Marketplace",
  description: "Mini SaaS de vente de prompts IA premium",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
