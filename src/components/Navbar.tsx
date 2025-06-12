'use client';

import { useModal } from "@/context/ModalContext";
import Link from "next/link";

export default function Navbar() {
    const { open } = useModal();

    return (
        <header className="sticky top-0 z-50 bg-[rgba(255,255,255,0.4)] backdrop-blur-lg shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-[#5AC0EC]">
                    LumoNest
                </Link>

                {/* Nav Links */}
                <nav className="space-x-6 hidden md:flex text-gray-700 font-medium">
                    <Link href="/explore" className="hover:text-[#5AC0EC] transition">Explore</Link>
                    <Link href="/knowledge" className="hover:text-[#5AC0EC] transition">Knowledge</Link>
                </nav>

                {/* Sign In */}
                <button
                    onClick={open}
                    className="bg-[#D1EBF7] text-gray-700 px-4 py-2 rounded-xl shadow hover:bg-[#5AC0EC] transition"
                >
                    Sign In
                </button>
            </div>
        </header>
    );
}