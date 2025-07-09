import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <ThemeToggle />
      <Link
        href="/dashboard"
        className="text-blue-500 hover:underline mt-3 mb-4"
      >
        Go to dashboard
      </Link>
      <h1 className="text-3xl font-bold underline">
        Welcome to Nava IT Management
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        deserunt, laboriosam aliquam facilis velit, minus itaque odit quasi
        dolorum, quam at modi culpa eius assumenda. Deserunt enim perferendis
        dicta alias!
      </p>
    </div>
  );
}
