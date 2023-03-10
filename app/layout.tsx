import PlausibleProvider from "next-plausible";

import "@/styles/globals.css";
import "@/components/Metadata/prism.css";

const generics = {
  title: "Next.js App Icon Generator",
  description: "Generate favicons/app icons with auto generated metadata output for your Next.js apps v13.2 and newer.",
};

export const metadata = {
  title: generics.title,
  description: generics.description,
  openGraph: {
    title: generics.title,
    description: generics.description,
    images: [
      {
        url: "https://next-app-icons.vercel.app/assets/images/share/og-share.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@nlswtlr",
    images: [{ url: "https://next-app-icons.vercel.app/assets/images/share/og-share.jpg", width: 1200, height: 630 }],
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
