import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../redux/store';
import { Provider } from 'react-redux';

import dynamic from "next/dynamic";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <PersistGate persistor={persistor}>
    <Component {...pageProps} />
    </PersistGate>
    </Provider> 
}