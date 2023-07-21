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
      <div className="absolute bottom-0 w-full">
        <Player />
      </div>
    </>
  );
};

export default Layout;
