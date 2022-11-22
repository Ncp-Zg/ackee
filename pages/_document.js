import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script async src="https://serene-sfogliatella-92f81b.netlify.app/tracker.js" data-ackee-server="https://track-visit.vercel.app"></script>
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
