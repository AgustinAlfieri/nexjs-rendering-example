import "./globals.css";
import Link from "next/link.js";

export const metadata = {
  title: "Next.js SSR vs SSG vs ISR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <nav style={{ display: "flex", gap: "2rem", marginBottom: "1rem" }}>
          <Link href="/">Home</Link>
          <Link href="/csr">CSR</Link>
          <Link href="/ssr">SSR</Link>
          <Link href="/ssg">SSG</Link>
          <Link href="/isr">ISR</Link>
          <Link href="/combinados">Combinados</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
