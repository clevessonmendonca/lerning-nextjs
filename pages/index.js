import Link from "next/link";
import Header from "@/components/Header";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
}
