import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const errorPage = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/");
  //   }, 3000);
  // }, []);
  const router = useRouter();
  return (
    <>
      <h1>Error Page</h1>
      <button onClick={() => router.push("/")}>Home</button>
    </>
  );
};
export default errorPage;
