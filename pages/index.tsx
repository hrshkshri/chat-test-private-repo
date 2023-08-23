import { useSession } from "next-auth/react";
import type { NextPage } from "next";
import HomePage from "@/templates/HomePage";
import Link from "next/link";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <HomePage />;
  }
  return <Link href="/api/auth/signin">Sign in</Link>;
};

export default Home;
