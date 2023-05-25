import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function Layout() {
  return (
    <>
      <Header></Header>

      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Layout;
