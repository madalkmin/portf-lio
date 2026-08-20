import type { Metadata } from "next";
import "./globals.css";
import { Motion } from "./motion";
export const metadata: Metadata = {
  metadataBase: new URL("https://madalkmin.github.io/portf-lio"),
  title: "Matheus D'Alkmin — Sistemas web",
  description: "Sistemas web sob medida para empresas.",
  openGraph: {
    title: "Matheus D'Alkmin — Sistemas web sob medida",
    description:
      "Produtos digitais que eliminam ruído e deixam a operação mais leve.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Matheus D'Alkmin — Sistemas web sob medida",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Motion />
        {children}
      </body>
    </html>
  );
}
