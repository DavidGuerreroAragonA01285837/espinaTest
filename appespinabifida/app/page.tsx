"use client"

import Login from "./components/login";

export default function Home({searchParams}: any) {
  return (<Login error={searchParams?.error}/>);
}
