import 'normalize.css/normalize.css';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
//npm install styled-components@5.3.0

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
