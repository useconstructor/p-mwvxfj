import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Contact Hub',
  description: 'A lightweight, cloud-backed CRM directory that helps solopreneurs, freelancers, agencies, and small teams centralize, search, and manage client contacts. The product combines instant lookup, notes, timelines, tagging, imports, and real-time device sync without enterprise complexity.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#F8F9FA', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
