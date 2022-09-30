import React from "react";
import { Link } from "react-router-dom";

const _styleLi: string =
  "font-thin text-xl border-2 border-zinc-400 mt-3 py-3 rounded-sm mx-3 cursor-pointer text-white hover:bg-purple-800 transition-all";

export default function MenuList() {
  return (
    <div>
      <ol className="text-center">
        <Link to={"/"}>
          <li className={_styleLi}>Главная</li>
        </Link>
        <Link to={"/settings"}>
          <li className={_styleLi}>Настройки</li>
        </Link>
        <Link to={"/about"}>
          <li className={_styleLi}>О проекте</li>
        </Link>
      </ol>
    </div>
  );
}
