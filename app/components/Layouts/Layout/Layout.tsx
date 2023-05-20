import Player from "../../Player/Player";
import Navbar from "../Navbar/Navbar";

type LayoutType = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Player />
    </>
  );
};

export default Layout;
