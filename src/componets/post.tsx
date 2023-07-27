//import React from "react";

type Props = {
    label : string
};

export default function Post({label}: Props) {
  return (
    <div className="text-slate-300">
      <form>
        <label>{label}</label>
        <br />
        <input type="text" name="your_message" id="your_message" />
        <br />
        <button type="submit" className="font-semibold border border-cyan-400">
          Sumbit
        </button>
      </form>
    </div>
  );
}
