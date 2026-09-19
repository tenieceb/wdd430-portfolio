"use client";

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ProjectSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();
  const [term, setTerm] = useState(searchParams.get('query') ?? '');

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set ('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);

  }

  useEffect(() => {
    const timeout = setTimeout(() => {
        handleSearch(term);
    }, 300);

    return () => clearTimeout(timeout);
  }, [term]);

  return (
    <input
        type ="search"
        placeholder="Search..."
        defaultValue={searchParams.get('query') ?? ''}
        onChange={(e) => setTerm(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-xs"
    />
 );
}