import React from 'react'
interface Props {
    children: React.ReactNode;
    close(): void}

export default function ModalWindow({children, close}: Props) {
  return (
    <div
    onClick={(event: React.MouseEvent<HTMLDivElement>)=>{
      if ((event.target as Element).classList.contains('closer')){
        close()
      } 
    }}
    className='closer bg-black bg-opacity-40 right-0 left-0 top-0 bottom-0 absolute text-center flex justify-center content-center items-center z-40'>
        {children}
    </div>
  )
}
