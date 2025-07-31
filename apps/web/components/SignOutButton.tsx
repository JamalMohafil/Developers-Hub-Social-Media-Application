"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Spinner from "./utils/Spinner";
import { LogOut } from "lucide-react";
import cookies from "js-cookie";
export const ClientSignOutButton = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setLoading(true);
      cookies.remove("session");
      router.refresh();
    } catch (error) {
      console.error("خطأ أثناء تسجيل الخروج:", error);
    }
  };

  return (
    <button
      className={`flex w-full items-center gap-2 cursor-pointer px-4 py-2 text-sm 
          ${loading ? "bg-slate-700 cursor-not-allowed" : "text-white hover:bg-slate-700"} transition-colors
          `}
      onClick={handleSignOut}
      disabled={loading}
    >
      {loading ? <Spinner /> : <LogOut className="h-5 w-5 text-emerald-400" />}
      Sign out
    </button>
  );
};
