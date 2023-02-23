import Link from "next/link";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/products">Product</Link>
      </li>
    </ul>
  );
}
