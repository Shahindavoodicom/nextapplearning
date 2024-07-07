"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const lastName = searchParams.get("lastName");

  const router = useRouter();

  return (
    <>
      <Link href={`/profile/${name}`}>{`about ${name} ${lastName}`}</Link>
      <button
        onClick={() => {
          router.refresh();
        }}
      >
        redirecting
      </button>
    </>
  );
}
