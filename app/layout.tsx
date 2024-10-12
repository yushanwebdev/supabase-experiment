import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Logo from "@/components/logo";
import { ModeToggle } from "@/components/ui/mode-toggle";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Olyn Blog",
  description: "Developed by yushanwebdev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased font-[family-name:var(--font-geist-mono)] bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="pt-3 md:pt-6 min-h-screen container">
            <header className="flex items-center justify-between border-b-[1px] md:border-b-0 px-6 pt-2 pb-4">
              <Logo />
              <ModeToggle />
            </header>
            <main className="pt-10 p-6">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
