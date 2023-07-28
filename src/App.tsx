import { Link } from "react-router-dom";
import Chat from "./componets/Chat";
import Post from "./componets/post";

type Props = {};

export default function App({}: Props) {
  return (
    <>
      <div className=" bg-slate-50 py-2">
        <h3>Welcome to My App</h3>
        <div>
          <Link
            to="/login"
            className=" mx-3 bg-cyan-500 hover:bg-cyan-400 text-white p-1 rounded-md"
          >
            Login
          </Link>
          <Link
            to="/register"
            className=" bg-cyan-500 hover:bg-cyan-400 text-white p-1 rounded-md"
          >
            Register
          </Link>
        </div>
      </div>
      <div className=" container mx-auto">
        <Chat />
      </div>
    </>
  );
}
