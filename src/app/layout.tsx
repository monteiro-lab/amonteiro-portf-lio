import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arthur Monteiro — Full-Stack Developer",
  description:
    "Full-Stack Developer building intelligent systems, dashboards, automations, and AI-powered web applications. Explore projects, tech stack, and developer journey.",
  keywords: [
    "Arthur Monteiro",
    "Full-Stack Developer",
    "Python",
    "Flask",
    "React",
    "Next.js",
    "AI",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Arthur Monteiro" }],
  openGraph: {
    title: "Arthur Monteiro — Full-Stack Developer",
    description:
      "Building intelligent systems, dashboards, automations, and AI-powered web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
