"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { WorkCategories } from "@/lib/data";

export default function CategoryUrlSync({
  onChange,
}: {
  onChange: (categories: string[]) => void;
}) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    onChange(category && WorkCategories.includes(category) ? [category] : []);
  }, [category, onChange]);

  return null;
}
