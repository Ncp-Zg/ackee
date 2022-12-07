import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <script async defer data-website-id="94b20932-e355-47a1-8899-3d376c4ec29c" src="https://peaceful-manatee-3744ef.netlify.app/umami.js"></script>        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
