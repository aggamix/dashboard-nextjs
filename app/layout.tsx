// CSS is handled by Next.js at runtime; TypeScript may not have declarations for this side-effect import.
// @ts-expect-error — global CSS imports do not require TypeScript declarations.
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
