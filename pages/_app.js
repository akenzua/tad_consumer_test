import React, { Fragment } from "react";
import App from "next/app";
import withReduxStore from "../redux/with-redux-store";
import { Provider } from "react-redux";

import { appWithTranslation } from "../components/translation/i18n";
import { i18n } from "../components/translation/i18n";
import Header from "../components/header";
import Footer from "../components/footer/PageFooter";

import { ThemeProvider } from "@moneypensionservice/directories";

class MyApp extends App {
  static async getInitialProps({ Component, ctx, reduxStore, req }) {
    let pageProps = {};
    let alternateLang = "";

    if (!process.browser) {
      alternateLang = ctx.req.language === "en" ? "cy" : "en";
    }
    let protocol = !process.browser ? ctx.req.protocol : "";
    let host = !process.browser ? ctx.req.headers.host : "";
    let path = !process.browser ? ctx.pathname : "";
    let alternateAddress = !process.browser
      ? `${protocol}://${host}/${alternateLang}${path}`
      : "";

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    if (typeof window === "undefined") {
      return { pageProps, alternateAddress };
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore, alternateAddress } = this.props;

    return (
      <Provider store={reduxStore}>
        <ThemeProvider>
          <Header alternateAddress={alternateAddress} />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore(appWithTranslation(MyApp));
