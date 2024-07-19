import Document, { Html, Head, Main, NextScript } from "next/document";
import {ServerStyleSheet} from "styled-components";

class MyDocument extends Document {

  static async getInitialProps(ctx) {

    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }


  render() {
    return (
      <Html lang="ru">
        <Head>
          <meta charSet="UTF-8"/>

          <title>«Невесомости»</title>
          <meta
            name="description"
            content="Выставка Констатина Ужве в ресторане Goose Goose от проекта PUBLICART"
          />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#665750"/>
          <meta name="msapplication-TileColor" content="#665750"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
