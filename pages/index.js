import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <h1 className="title">
      Read<Link href="/posts/first-post">this page!</Link>
    </h1>
  );
}
