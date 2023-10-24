import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Suspense } from 'react';
import Loader from './Loader/Loader';
import { useSelector } from 'react-redux';
import { selectAuthIsLoading, selectIsBookLoading } from '@/redux/selectors';

export default function Layout({ children }) {
  const isAuthLoading = useSelector(selectAuthIsLoading);
  const isBooksLoading = useSelector(selectIsBookLoading);
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      {(isAuthLoading || isBooksLoading) && <Loader />}
      <Footer />
    </>
  );
}
