import React from 'react'

interface CardProps {
    nombre: string;
    descripcion: string;
    precio: string;
}

const Card = ({nombre, descripcion, precio}:CardProps) => {
  return (
    <div className='flex flex-col items-center border-2 rounded-lg border-slate-400 py-2 px-5 justify-between max-h-72 w-40'>
        <div className='flex flex-col items-center text-center'>
            <span className='w-20 h-20 bg-red-500 rounded-lg'></span>
            <span className='font-bold text-lg'>{nombre}</span>
            <span>{descripcion}</span>
            <span>{precio}</span>
        </div>
        
        <button className='bg-amber-400 py-2 px-5 rounded-lg'>Comprar</button>
    </div>
  )
}

export default Card