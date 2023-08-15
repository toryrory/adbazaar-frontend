import 'normalize.css/normalize.css';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
//npm install styled-components@5.3.0

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId="1089966779178-dsj9qj83g2l8ug4kpfvasdaag8dpqp77.apps.googleusercontent.com">
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </Provider>
  );
}
