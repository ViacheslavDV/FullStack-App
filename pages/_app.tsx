import Layout from "@/app/components/Layouts/Layout/Layout";
import AuthProvider from "@/app/providers/auth-provider/AuthProvider";
import { TypeComponentAuthFields } from "@/app/providers/auth-provider/auth-page.type";
import { store, persistor } from "@/app/store/store";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps,
}: AppProps & TypeComponentAuthFields) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider Component={{ isAuthorized: Component.isAuthorized }}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}
