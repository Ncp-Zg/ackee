import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <script async src="https://serene-sfogliatella-92f81b.netlify.app/tracker.js" data-ackee-server="https://serene-sfogliatella-92f81b.netlify.app" data-ackee-domain-id="542396e4-8a6a-498c-a94e-64365dd13382"></script>        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
