import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
// import Script from "next/script";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>first post?</title>
        </Head>

        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>back home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
