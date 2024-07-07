"use client";
import React, { useEffect, useState, useRef } from "react";

export const Jokes = () => {
  const [joke, setJoke] = useState("");
  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) return;
    hasMounted.current = true;

    const fetchData = async () => {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await res.json();
      if (!res.ok) {
        setJoke("");
      } else {
        setJoke(data.value);
      }
    };
    fetchData();
  }, []);

  return <div>{joke}</div>;
};
