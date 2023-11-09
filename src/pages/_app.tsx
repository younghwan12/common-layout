import type { AppContext, AppProps } from "next/app";
import { Provider } from "react-redux";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "../styles/layout/layout.scss";
import Head from "next/head";
import { store } from "../redux/store";

//layout
import { LayoutProvider } from "../layout/context/layoutcontext";
import Layout from "../layout/layout";

// type
import { NextPage } from "next";
import { ReactElement, ReactNode, useContext } from "react";
import PrimeReact, { PrimeReactProvider, locale } from "primereact/api";
import Primereact from "primereact/api";

// start npx json-server --watch c:\json-server\db.json --port 4000 -H 172.20.10.2

interface InitialProps {
  cookies: unknown;
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// require("../mocks")

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  Primereact.ripple = true;
  if (Component.getLayout) {
    return (
      <Provider store={store}>
        <LayoutProvider>
          {Component.getLayout(<Component {...pageProps} />)}
        </LayoutProvider>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <LayoutProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LayoutProvider>
      </Provider>
    );
  }
};

App.getInitialProps = async (context: AppContext) => {
  // const { ctx } = context;
  // console.log(Object.keys(ctx));

  return {};
};

export default App;
