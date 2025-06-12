'use client';

import { useModal } from "@/context/ModalContext";
import { signInAnonymously, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { auth } from "@/firebase/firebase";

export default function AuthModal() {
    const { isOpen, close } = useModal();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!isOpen) return null;

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            close();
        } catch (error) {
            alert("Login failed. Please try again.");
        }
    };

    const handleGuest = async () => {
        try {
            await signInAnonymously(auth);
            close();
        } catch (error) {
            alert("Anonymous login failed.");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur">
            <div className="bg-[#9DDCF7] p-6 rounded-2xl shadow-xl w-[90%] max-w-md">
                <button
                    onClick={close}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-4xl font-bold focus:outline-none"
                    aria-label="Close modal"
                >
                    &times;
                </button>
                <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">Sign In to LumoNest</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Email Field */}
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full p-2 border text-black border-white rounded"
                        required
                    />
                    {/* Password Field */}
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full p-2 border text-black border-white rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#5AC0EC] text-white py-2 rounded hover:bg-[#38ADD8]"
                    >
                        Sign In
                    </button>
                </form>
                <button onClick={handleGuest} className="w-full text-white bg-grey-200 py-2 rounded hover:bg-gray-300">
                    Continue as Guest
                </button>
            </div>
        </div>
    );
}