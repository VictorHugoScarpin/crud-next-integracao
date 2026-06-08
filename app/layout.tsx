import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistema CRUD | Integração",
  description: "Atividade de integração Frontend e Backend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 flex flex-col min-h-screen`}>
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          {/* A área principal onde as telas dos seus colegas vão renderizar */}
          <main className="flex-1 p-8 bg-zinc-900/50 shadow-[inset_0_4px_24px_rgba(0,0,0,0.4)] overflow-y-auto">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}