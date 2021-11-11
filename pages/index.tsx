import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import ConfettiGenerator from "confetti-js";
import { useEffect } from "react";

interface IndexPageProps {
  newStandupRota: string;
}
export default function IndexPage({
  newStandupRota,
}: IndexPageProps): JSX.Element {
  useEffect(() => {
    const confettiSettings = { target: "cx" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []); // add the var dependencies or not
  return (
    <div className="🏡">
      <Head>
        <title>Who is the standup today</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="🍌">{newStandupRota}</h1>
      <canvas id="cx" />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const teamMembers = [
    "Casper",
    "Valera",
    "Marie",
    "Emil",
    "Attila",
    "Rune",
    "Abdul",
    "Ali",
  ];

  const newStandupRota = teamMembers.sort(() => 0.5 - Math.random());
  return {
    props: {
      newStandupRota: newStandupRota[0],
    },
  };
};
