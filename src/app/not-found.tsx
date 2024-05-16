import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-[160px]">
      <div className="container  py-[140px] flex items-center justify-center gap-5 ">
        <p className="text-9xl border-r border-gray-800 pr-4">404</p>
        <div>
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href="/">
            <p className="hover:text-yellow-400">Return Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
