"use client";

import { useFoo } from "@/domain/foo/hooks/useFoo";

export const A = () => {
  const { text, loading, error } = useFoo();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return <div>{text}</div>;
};
