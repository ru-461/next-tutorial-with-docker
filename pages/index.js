import Link from "next/link";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
    </>
  );
};

export default HomePage;
