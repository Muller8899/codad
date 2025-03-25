"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signUpWithEmail, signInWithGoogle, signInWithFacebook } from "@/lib/firebase";
import { NextImage } from "@/components/ui/NextImage";

interface SignupFormProps {
  onSuccess?: () => void;
  onClose?: () => void;
}

export function SignupForm({ onSuccess, onClose }: SignupFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("密碼不一致，請確認密碼");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await signUpWithEmail(email, password);
      if (onSuccess) onSuccess();
      if (onClose) onClose();
    } catch (err: unknown) {
      const error = err as { message?: string };
      setError(error.message || "註冊失敗，請再試一次");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    setError(null);

    try {
      await signInWithGoogle();
      if (onSuccess) onSuccess();
      if (onClose) onClose();
    } catch (err: unknown) {
      const error = err as { message?: string };
      setError(error.message || "Google 註冊失敗");
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookSignup = async () => {
    setLoading(true);
    setError(null);

    try {
      await signInWithFacebook();
      if (onSuccess) onSuccess();
      if (onClose) onClose();
    } catch (err: unknown) {
      const error = err as { message?: string };
      setError(error.message || "Facebook 註冊失敗");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 p-1">
      <div className="text-center">
        <NextImage
          src="/images/codashop-logo.png"
          alt="Codashop Logo"
          width={120}
          height={40}
          className="mx-auto mb-4"
        />
        <h3 className="text-xl font-bold text-white">註冊 Codashop 帳戶</h3>
        <p className="text-sm text-white/70 mt-1">註冊以獲得第一手優惠資訊和獎勵</p>
      </div>

      {error && (
        <div className="bg-red-500/20 text-red-200 p-3 text-sm rounded-md">
          {error}
        </div>
      )}

      <div className="space-y-3">
        <Button
          type="button"
          variant="outline"
          className="w-full flex items-center gap-2 border-white/20 hover:bg-white/10 hover:text-white justify-start"
          onClick={handleGoogleSignup}
          disabled={loading}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0"></path>
          </svg>
          <span className="ml-2">使用 Google 繼續</span>
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full flex items-center gap-2 border-white/20 hover:bg-white/10 hover:text-white justify-start"
          onClick={handleFacebookSignup}
          disabled={loading}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
          <span className="ml-2">使用 Facebook 繼續</span>
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/20"></span>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-[#280b2f] px-2 text-white/60">或使用電子郵件註冊</span>
          </div>
        </div>

        <form onSubmit={handleEmailSignup} className="space-y-3">
          <div>
            <Input
              type="email"
              placeholder="電子郵件"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white"
              required
            />
          </div>

          <div>
            <Input
              type="password"
              placeholder="密碼"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/10 border-white/20 text-white"
              required
              minLength={6}
            />
            <p className="text-xs text-white/60 mt-1">密碼至少包含 6 個字符</p>
          </div>

          <div>
            <Input
              type="password"
              placeholder="確認密碼"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-white/10 border-white/20 text-white"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 rounded border-white/20 bg-white/10"
              required
            />
            <label htmlFor="terms" className="text-xs text-white/70">
              我同意 Codashop 的<Button variant="link" className="text-primary p-0 h-auto">條款及條件</Button>和<Button variant="link" className="text-primary p-0 h-auto">隱私政策</Button>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
            disabled={loading}
          >
            {loading ? "註冊中..." : "註冊"}
          </Button>
        </form>
      </div>

      <div className="text-center text-sm text-white/70">
        <p>已經有帳戶？<Button variant="link" className="text-primary p-0" onClick={onClose}>登入</Button></p>
      </div>
    </div>
  );
}
