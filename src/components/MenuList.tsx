import React from 'react'
import { Link } from 'react-router-dom'

const _styleLi: string = 'font-thin text-xl border-2 border-zinc-400 mt-3 py-3 rounded-sm mx-3 cursor-pointer text-white hover:bg-purple-800 transition-all'

export default function MenuList() {
  return (
    <div>
        <ol className="text-center">
          <li className={_styleLi}>
            <Link to="/">Главная</Link>
            </li>
          <li className={_styleLi}>
          <Link to="/about">Справка</Link>
          </li>
          <li className={_styleLi}>Настройки</li>
        </ol>
    </div>
  )
}
