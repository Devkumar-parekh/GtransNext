import Head from "next/head";

import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Navbar from "@/Components/Navbar";

// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return {
//     props: { data },
//   };
// };

export default function Home() {
  // console.log(data);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
