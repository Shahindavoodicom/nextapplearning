"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page({
  params,
}: {
  params: {
    number : number;
  };
}) {
  return <h1>{`this is ${params.number}`}</h1>;
}
