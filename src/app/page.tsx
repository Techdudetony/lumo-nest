'use client';

import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import AuthModal from "@/components/AuthModal";

export default function Home() {

  const { open } = useModal();

  return (
    <main className="min-h-screen text-grey-800 px-6 py-12">
      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-9xl font-extrabold text-gray-900">
          Welcome to <span className="text-[#5AC0EC]">LumoNest</span>
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          A guided space for <strong>mental clarity</strong>, <strong>knowledge</strong>, and
          <strong>peace</strong>.
        </p>

        <p className="mt-2 text-lg text-gray-600">
          "Light begins the moment you seek to understand."
        </p>

        <div className="mt-6 justify-center gap-4">
          <button
            onClick={open}
            className="bg-[#D1EBF7] text-gray-600 px-6 py-2 mr-4 rounded-xl shadow hover:bg-[#5AC0EC] transition"
          >
            Sign In
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            title: "Knowledge Base",
            desc: "Explore mental, behavioral, and neurological conditions in simple, calming language.",
            icon: "/knowledge-base.png",
          },
          {
            title: "Mindful Activities",
            desc: "Journal, listen to soundscapes, or try calming exercisees anytime you need a break.",
            icon: "/mindful-activities.png",
          },
          {
            title: "Local Resources",
            desc: "Find therapists and emergency help nearby when you're ready to talk to someone.",
            icon: "/local-resources.png",
          }
        ].map(({ title, desc, icon }) => (
          <div key={title} className="bg-[#9DDCF7]/20 rounded-2xl shadow-lg backdrop-blur-md p-6 border border-white/30 hover:shadow-xl transition cursor-pointer">
            <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <Image
                src={icon}
                alt={title}
                width={128}
                height={128}
                className="contrast-125 brightness-110"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
            <p className="text-gray-700">{desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-24 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} LumoNest. All rights reserved.
      </footer>

      <AuthModal />
    </main>
  )
}