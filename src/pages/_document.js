import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Montserrat&display=swap"
        />
        <link rel="favicon" href="/favicon.png" />
        <meta name="title" content="Genetic Pottery" />
        <meta name="description" content="News Site" />
        <meta name="keywords" content="news,latest,breakingnews,trending" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
