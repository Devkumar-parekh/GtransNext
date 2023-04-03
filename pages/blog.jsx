import Link from "next/link";
import Navbar from "@/Components/Navbar";
import Head from "next/head";

const imgsize = [
  { width: 550, height: 300 },
  { width: 300, height: 300 },
  { width: 200, height: 300 },
  { width: 400, height: 300 },
];
// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return {
//     props: { data },
//   };
// };

// export const getServerSideProps = async () => {
export const getStaticProps = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await fetch("https://api.clubshop.com/api/Auth/GetCompany");
  // https://api.clubshop.com/api/Auth/GetCountry
  const data = await res.json();
  return {
    props: { data },
  };
};
const showData = (d) => {
  return d.map((val, index) => {
    return <div key={index}>{val.Text}</div>;
  });
};
export default function Home({ data }) {
  console.log(data.Data);

  return <>{showData(data.Data)}</>;
}
