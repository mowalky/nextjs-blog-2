import Link from "next/link";
import Logo from "./logo";

function MainNavigation() {
  return (
    <header>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
