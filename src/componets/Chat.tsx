import imgReact from "../assets/react.svg";
import imgVite from "../assets/vite.svg";

type Props = {};

export default function Chat({}: Props) {
  return (
    <>
      <div
        className=" mt-8 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex 
        items-center space-x-4"
      >
        <div className="shrink-0"></div>
        <img className="h-12 w-12" src={imgReact} alt="react" />
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>

      <div className=" mt-5 py-8 max-w-sm mx-auto bg-slate-100 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="block mx-auto h-24 rounded-2xl sm:mx-3 sm:shrink-0 "
          src={imgVite}
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              Thanakrit Trakanjan
            </p>
            <p className="text-slate-500 font-medium">Developer</p>
          </div>
          <button className="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-500 hover:text-red-700 ">Message</button>
        </div>
      </div>
    </>
  );
}
