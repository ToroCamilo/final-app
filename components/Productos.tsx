import React from "react";
import { data } from '@/utils/data';
import Card from "@/components/Card";

const Productos = () => {
  return (
    <div className="p-10 flex gap-10">
        {data.Productos.map((producto) => {
            return (
            <Card 
              key={producto} 
              nombre={producto.nombre} 
              descripcion={producto.descripcion} 
              precio={producto.Precio}/>
            )
        })}
    </div>
  );
};

export  {Productos};
