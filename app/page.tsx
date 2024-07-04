"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [name, setName] = useState("");
  const [serverRes, setServerRes] = useState("");
  const [nameServer, setNameServer] = useState("");

  async function sendName() {
    axios
      .post("/api/hello", {
        name,
      })
      .then((res) => {
        if (res.status === 200) {
          setServerRes(res.data.hello);
          axios.get("/api/hello").then((res) => {
            setNameServer(res.data.hello);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <input
        className="border-2"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={sendName} className="bg-green-700 text-white p-2">
        send name
      </button>
      <h1>{nameServer && nameServer}</h1>
      <h1>{serverRes && serverRes}</h1>
      <Link
        href={"/about?name=shahin&lastName=davoodi"}
        className="text-blue-700"
      >
        about page
      </Link>
      
    </>
  );
}
