import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Other Rahman",
  description: "The Other Rahman",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
