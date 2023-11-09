import getConfig from "next/config";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    console.log("contextPath", getConfig().publicRuntimeConfig);

    return (
      <Html lang="ko">
        <Head>
          <link
            id="theme-css"
            href={`${contextPath}/themes/light-blue/theme.css`}
            rel="stylesheet"
          ></link>
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
