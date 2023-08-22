import { useUserAuth } from "./context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

type Props = {};

export default function Home({}: Props) {
  const { logout, user }: any = useUserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className=" mx-auto">
        <h1 className=" dark:bg-slate-50">Welcome To Home Page</h1>
        <p className=" dark: text-white">Hi, {user.email}</p>
        <div className=" mb-2">
          <button onClick={handleLogout} className=" bg-red-500 p-1 rounded">
            <p className="dark:text-slate-50">Logout</p>
          </button>
        </div>
      </div>
    </>
  );
}
