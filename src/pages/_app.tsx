import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Providers from "@/providers/Providers";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </ReduxProvider>
  );
}
