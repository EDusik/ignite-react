import Head from "next/head";
import React from "react";
import { GetStaticProps } from "next";

import Prismic from "@prismicio/client";
import { getPrismicClient } from "../../src/services/prismic";

import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>time</time>
            <strong>strong</strong>
            <p>paragrather</p>
          </a>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at("document.type", "post")
  ], {
    fetch: ["post.title", "post.content"],
    pageSize: 100
  });

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {}
  }
}
