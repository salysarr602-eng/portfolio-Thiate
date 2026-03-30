import { Outlet } from 'react-router-dom';
import Navbar from '../composants/Navbar';
import Footer from '../composants/Footer';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
