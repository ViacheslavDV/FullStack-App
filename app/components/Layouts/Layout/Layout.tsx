import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type LayoutType = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
