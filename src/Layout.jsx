import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function Layout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <p>footer</p>
    </>
  );
}

export default Layout;