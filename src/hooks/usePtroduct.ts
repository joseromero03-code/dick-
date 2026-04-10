
import { useEffect, useState } from "react";

interface API{
    id: number,
    title: string,
    price: number
};

const usePtroduct = ()=> {
    const [product, setProduct] = useState<API[]>([]);
    const [filtro, setFiltro] = useState("");

useEffect(()=>{
 const traerInfo= async()=>{
        try{
            const respuesta = await fetch("https://api.escuelajs.co/api/v1/products")
            const datos = await respuesta.json()
            const lista : API[] = datos.map((p:API)=>({
                id: p.id,
                title: p.title,
                price: p.price
            }))
            setProduct(lista)
        }catch(error){
            console.error(error);  
        }
    }
    traerInfo()
    },[])

    const productoFiltrado = product.filter((p)=>
        p.title.toLowerCase().includes(filtro.toLowerCase())
    )

    return{
        product : productoFiltrado,
        filtro,
        setFiltro
    }
    

}

export default usePtroduct