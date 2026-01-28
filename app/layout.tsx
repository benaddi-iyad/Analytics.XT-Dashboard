import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/Sidebar';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'ANALYTICS XT | Enterprise Analytics',
    description: 'Next-Gen Operations Dashboard',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.className} min-h-screen bg-[#020617] text-gray-100 overflow-hidden`}>
                <div className="flex h-screen w-full">
                    <Sidebar />
                    <div className="flex flex-1 flex-col overflow-hidden relative">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                        <Navbar />
                        <main className="relative flex-1 overflow-y-auto p-6 lg:p-10 z-0">
                            {children}
                        </main>
                    </div>
                </div>
            </body>
        </html>
    );
}
