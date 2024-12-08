import "./globals.css";
import "katex/dist/katex.min.css";
import Link from "next/link";
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
                <Navbar />
                {/* Add pt-32 to account for navbar height */}
                <div className="min-h-screen flex flex-col justify-between pt-32 md:pt-32 p-8 bg-white text-gray-900">
                    <main className="max-w-[60ch] mx-auto w-full space-y-6">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="flex flex-col space-y-2 w-full max-w-[60ch] mx-auto p-8">
                <div className="flex justify-between items-center w-full">
                    <Link href="/" className="text-md font-bold text-gray-900">
                        Home
                    </Link>
                    <div className="space-x-4">
                        <Link
                            href="https://github.com/Pushan2005/dsa-guide"
                            className="text-md font-bold text-gray-900"
                        >
                            GitHub
                        </Link>
                    </div>
                </div>
                <div className="text-sm text-gray-500 text-center mt-2">
                    Made with ❤️ by Pushan
                </div>
            </div>
        </nav>
    );
}
