import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arthur Monteiro | Full-Stack Developer",
  description:
    "Desenvolvedor Full-Stack construindo sistemas inteligentes, dashboards, automações e aplicações web com IA. Explore projetos, stack de tecnologia e a jornada como desenvolvedor.",
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
    title: "Arthur Monteiro | Full-Stack Developer",
    description:
      "Construindo sistemas inteligentes, dashboards, automações e aplicações web com IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
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
