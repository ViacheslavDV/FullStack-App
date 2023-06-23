import Auth from "@/app/components/Screens/Auth/Auth";
import { NextPage } from "next";

const AuthPage: NextPage = () => {
  return (
    <div className="h-[calc(100vh-248px)]">
      <Auth />
    </div>
  );
};

export default AuthPage;
