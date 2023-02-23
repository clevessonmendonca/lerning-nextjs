import Navbar from "@/components/navbar";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Navbar route="/products" />
    </div>
  );
}
