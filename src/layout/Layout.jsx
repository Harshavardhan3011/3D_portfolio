import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import SEO from "../components/SEO";

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <SEO />
      {/* Premium Glass Header Navbar */}
      <Navbar />

      {/* Main Page Content mounted via Router */}
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}
