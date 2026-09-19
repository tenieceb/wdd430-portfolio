"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({
  totalPages,
}: {
  totalPages: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  function createPageURL(pageNumber: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  }

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-8 flex gap-4">
      {currentPage > 1 && (
        <a href={createPageURL(currentPage - 1)}>
          Previous
        </a>
      )}

      {currentPage < totalPages && (
        <a href={createPageURL(currentPage + 1)}>
          Next
        </a>
      )}
    </div>
  );
}