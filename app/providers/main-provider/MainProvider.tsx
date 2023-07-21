"use client";
import { persistor, store } from "@/app/store/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AuthProvider from "../auth-provider/AuthProvider";
import Layout from "@/app/components/Layouts/Layout/Layout";
import { PropsWithChildren } from "react";

const MainProvider = ({ children }: PropsWithChildren<unknown>) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider>
            <Layout>{children}</Layout>
          </AuthProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default MainProvider;
