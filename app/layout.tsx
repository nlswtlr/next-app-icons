import "@/styles/globals.css";

export const metadata = {
  title: "Next.js App Icons Generator",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-primary">{children}</body>
    </html>
  );
}
