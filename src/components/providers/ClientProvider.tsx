"use client";

import { ReactNode, useEffect, useState } from "react";

interface ClientProviderProps {
  children: ReactNode;
}

/**
 * A client-side only provider component that ensures its children
 * are only rendered on the client, avoiding hydration mismatches.
 */
export default function ClientProvider({ children }: ClientProviderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return nothing on the server and during first client render
  }

  return <>{children}</>;
}
