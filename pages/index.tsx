import { useSession } from "next-auth/react";
import type { NextPage } from "next";
import HomePage from "@/templates/HomePage";

const Home: NextPage = () => {
  return <HomePage />;
};

export default Home;
