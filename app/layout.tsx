import PlausibleProvider from "next-plausible";

import "@/styles/globals.css";
import "@/components/Metadata/prism.css";

export const metadata = {
  title: "Next.js App Icon Generator",
  description: "Generate favicons/app icons with auto generated metadata output.",
  openGraph: {
    images: [
      {
        url: "https://next-app-icons.vercel.app/assets/images/share/og-share.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@nlswtlr",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="next-app-icons.vercel.app" />
      </head>
      <body className="bg-primary">{children}</body>
    </html>
  );
}
