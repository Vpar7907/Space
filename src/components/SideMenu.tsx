import React, {useState} from 'react'
import Menu from './Menu';
import MenuButton from "./UI/MenuButton";


export default function SideMenu() {
    const[open, setOpen] = useState(false)
    const handleOpen = (val: boolean) => {
     setOpen(val)
    }
  return (
    <>
    <MenuButton openMenu={handleOpen} 
      open={open}/>
      <Menu open={open} handleOpen={handleOpen}/>
    </>
  )
}
