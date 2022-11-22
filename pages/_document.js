import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <script async src="https://track-visit.vercel.app/tracker.js" data-ackee-server="https://serene-sfogliatella-92f81b.netlify.app" data-ackee-domain-id="318f89b4-d620-4882-871e-ca048e3e8d28"></script>
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
