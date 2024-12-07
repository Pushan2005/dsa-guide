import "./globals.css";
import "katex/dist/katex.min.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    alternates: {
        canonical: "/",
    },

    description: "DSA Guide for SEE",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.className}`}>
            <body className="antialiased tracking-tight">
                <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
                    <main className="max-w-[60ch] mx-auto w-full space-y-6">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
