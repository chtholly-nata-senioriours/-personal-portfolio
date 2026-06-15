"use client";

import { useState } from "react";
import { HiEnvelope, HiPhone } from "react-icons/hi2";
import { FiCopy, FiCheck, FiMapPin } from "react-icons/fi";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailParts = { user: "1125392821", domain: "qq", tld: "com" };
  const email = `${emailParts.user}@${emailParts.domain}.${emailParts.tld}`;
  const phone = "17263449578";

  const copy = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") { setCopiedEmail(true); setTimeout(() => setCopiedEmail(false), 2000); }
      else { setCopiedPhone(true); setTimeout(() => setCopiedPhone(false), 2000); }
    } catch { /* ignore */ }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <HiEnvelope className="w-4 h-4 text-zinc-400 shrink-0" />
        <span className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
          {emailParts.user}<span className="text-zinc-300 dark:text-zinc-600">@</span>{emailParts.domain}<span className="text-zinc-300 dark:text-zinc-600">.</span>{emailParts.tld}
        </span>
        <button onClick={() => copy(email, "email")} className="p-1 rounded text-zinc-300 dark:text-zinc-600 hover:text-indigo-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer" aria-label="复制邮箱">
          {copiedEmail ? <FiCheck className="w-3 h-3 text-green-500" /> : <FiCopy className="w-3 h-3" />}
        </button>
      </div>
      <div className="flex items-center gap-3">
        <HiPhone className="w-4 h-4 text-zinc-400 shrink-0" />
        <span className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">{phone}</span>
        <button onClick={() => copy(phone, "phone")} className="p-1 rounded text-zinc-300 dark:text-zinc-600 hover:text-indigo-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer" aria-label="复制电话">
          {copiedPhone ? <FiCheck className="w-3 h-3 text-green-500" /> : <FiCopy className="w-3 h-3" />}
        </button>
      </div>
      <div className="flex items-center gap-3">
        <FiMapPin className="w-4 h-4 text-zinc-400 shrink-0" />
        <span className="text-sm text-zinc-600 dark:text-zinc-400">山东省济南市槐荫区</span>
      </div>
    </div>
  );
}
