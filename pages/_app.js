import React, { Fragment } from "react";
import App from "next/app";
import { appWithTranslation } from "../components/translation/i18n";

import { Header, Logo } from "../components/Styles/Header";
import GlobalStyle from "../components/Styles/globalStyle";
import { Translation } from "../components/Styles/Text";
import LanguageSwitcher from "../components/translation/languageSwitcher";
import Footer from "../components/footer";
import withReduxStore from "../redux/with-redux-store";
import { Provider } from "react-redux";

class MyApp extends App {
  static async getInitialProps({ Component, ctx, reduxStore }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    console.log(pageProps);
    return (
      <Provider store={reduxStore}>
        <GlobalStyle />
        <Header pb="0" pt="0" justify="space-between">
          {/* Wrap a container around */}
          <Logo />
          <Translation>
            <LanguageSwitcher />
          </Translation>
        </Header>
        <Component {...pageProps} />
        <Footer />
      </Provider>
    );
  }
}

export default withReduxStore(appWithTranslation(MyApp));
