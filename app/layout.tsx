import PlausibleProvider from 'next-plausible';

import '@/styles/globals.css';
import '@/components/Metadata/prism.css';

const generics = {
  title: 'Next.js App Icon Generator',
  description:
    'Generate favicons/app icons with auto generated metadata output for your Next.js apps v13.2 and newer.',
};

export const metadata = {
  metadataBase: new URL('https://next-app-icons.vercel.app'),
  title: generics.title,
  description: generics.description,
  openGraph: {
    title: generics.title,
    description: generics.description,
    images: [
      {
        url: '/assets/images/share/og-share.jpg?v=070523',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@nlswtlr',
    images: [
      {
        url: '/assets/images/share/og-share.jpg?v=070523',
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    shortcut: {
      url: '/favicon.ico',
    },
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
  },
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="next-app-icons.vercel.app" />
      </head>
      <body className="bg-primary">{children}</body>
    </html>
  );
}
