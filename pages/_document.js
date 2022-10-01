import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            defer
            data-website-id="2cf7e2a2-1316-457e-b461-35118f3a795c"
            src="https://umami-2.herokuapp.com/umami.js"
            data-domains="https://track-visit.vercel.app/"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
