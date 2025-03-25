"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";
import { useAuth } from "@/lib/AuthContext";

interface AuthModalProps {
  triggerButton?: React.ReactNode;
  defaultMode?: "login" | "signup";
}

export function AuthModal({ triggerButton, defaultMode = "login" }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">(defaultMode);
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  const handleToggleMode = () => {
    setMode(mode === "login" ? "signup" : "login");
  };

  if (user) {
    return null; // If user is already logged in, don't render the modal trigger
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {triggerButton || (
          <Button
            variant="outline"
            className="rounded-full bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
          >
            登入
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-[#280b2f] border-[#4a1d55] max-h-[90vh] overflow-auto">
        {mode === "login" ? (
          <LoginForm
            onSuccess={() => setOpen(false)}
            onClose={() => handleToggleMode()}
          />
        ) : (
          <SignupForm
            onSuccess={() => setOpen(false)}
            onClose={() => handleToggleMode()}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
