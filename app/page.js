import Link from "next/link";
import Navigation from "@/app/_components/Navigation";

export default function page() {
  return (
    <div>
      {/* <Navigation /> */}
      <h1>The wild oasis. Welcome to the paradise</h1>
      {/* <a href="/cabins">Explore luxury cabins</a> */}
      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
