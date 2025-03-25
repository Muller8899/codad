"use client";

import { PropsWithChildren, Suspense } from "react";

export function ClientBody({ children }: PropsWithChildren) {
  return (
    <body className="min-h-screen bg-background font-sans antialiased">
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </body>
  );
}
