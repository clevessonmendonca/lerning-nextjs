import Link from "next/link";

export default function Header({ route }) {
  return (
    <ul>
      <li>
        <Link href={route}>{route}</Link>
      </li>
    </ul>
  );
}
