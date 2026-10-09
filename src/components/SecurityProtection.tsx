"use client";

import React, { useEffect, useState } from "react";
import { ShieldAlert } from "lucide-react";

/**
 * SecurityProtection Component
 * 
 * Provides client-side defense against content scraping, inspection shortcuts,
 * image unauthorized downloading, and context menu cloning.
 * Protects legitimate federation assets, emblems, student verification databases,
 * and leadership credentials while preserving input usability for users.
 */
export default function SecurityProtection() {
  const [warningMessage, setWarningMessage] = useState<string | null>(null);

  useEffect(() => {
    // 1. Disable Right-Click (Context Menu)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setWarningMessage(
        "Official WCMAA India content, trademarks, and credentials are protected against unauthorized copying."
      );
    };

    // 2. Disable DevTools & Source Code Inspection Keyboard Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = typeof window !== "undefined" && navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

      // F12 -> Developer Tools
      if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        setWarningMessage("Source code inspection is restricted for federation security compliance.");
        return;
      }

      // Ctrl+U / Cmd+U -> View Page Source
      if (cmdOrCtrl && (e.key === "u" || e.key === "U" || e.keyCode === 85)) {
        e.preventDefault();
        setWarningMessage("Viewing page source is restricted for security compliance.");
        return;
      }

      // Ctrl+Shift+I / Cmd+Option+I -> Developer Tools
      if (cmdOrCtrl && e.shiftKey && (e.key === "i" || e.key === "I" || e.keyCode === 73)) {
        e.preventDefault();
        setWarningMessage("Developer inspection tools are disabled.");
        return;
      }

      // Ctrl+Shift+J / Cmd+Option+J -> Developer Console
      if (cmdOrCtrl && e.shiftKey && (e.key === "j" || e.key === "J" || e.keyCode === 74)) {
        e.preventDefault();
        setWarningMessage("Developer console is disabled.");
        return;
      }

      // Ctrl+Shift+C / Cmd+Option+C -> Element Picker
      if (cmdOrCtrl && e.shiftKey && (e.key === "c" || e.key === "C" || e.keyCode === 67)) {
        e.preventDefault();
        setWarningMessage("Element inspection is disabled.");
        return;
      }

      // Ctrl+S / Cmd+S -> Save Page
      if (cmdOrCtrl && (e.key === "s" || e.key === "S" || e.keyCode === 83)) {
        e.preventDefault();
        setWarningMessage("Saving offline copies of this protected website is restricted.");
        return;
      }
    };

    // 3. Disable Dragging of Images
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("dragstart", handleDragStart);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  // Auto-dismiss warning toast after 2.8 seconds
  useEffect(() => {
    if (warningMessage) {
      const timer = setTimeout(() => {
        setWarningMessage(null);
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, [warningMessage]);

  if (!warningMessage) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="fixed bottom-6 right-6 z-[9999] max-w-sm p-4 rounded-xl bg-slate-900/95 border border-amber-500/80 shadow-2xl backdrop-blur-md text-slate-100 flex items-start gap-3 animate-fadeIn transition-all"
    >
      <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
        <ShieldAlert className="w-5 h-5" />
      </div>
      <div className="flex-1 text-xs">
        <p className="font-bold text-amber-400 mb-0.5 tracking-wide">
          Security Compliance Notice
        </p>
        <p className="text-slate-300 leading-relaxed text-[11px]">
          {warningMessage}
        </p>
      </div>
    </div>
  );
}
