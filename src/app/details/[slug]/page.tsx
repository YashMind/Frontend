import { legalPages } from "@/data/legalPages";

// app/details/[slug]/page.tsx
export async function generateStaticParams() {
    return Object.keys(legalPages).map((slug) => ({ slug }));
  }
  