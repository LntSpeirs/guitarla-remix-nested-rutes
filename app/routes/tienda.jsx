import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import ListadoGuitarras from "~/components/listado-guitarras";

import styles from "~/styles/guitarras.css";

export function meta() {
    return {
        title: "GuitarLA - Tienda de Guitarras",
        description: "GuitarLA - Nuestra coleccion de guitarras",
    };
}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
    ];
}

//Remix lo llama en automatico en el servidor en el momento que lo exportas
export async function loader() {
    //este console.log se ve en la consola del servidor pero no en el cliente
    //console.log("Desde loader")
    const guitarras = await getGuitarras();
    return guitarras.data;
}

function Tienda() {
    //esta parte se ejecuta en el cliente
    const guitarras = useLoaderData();
    //console.log(guitarras.data);

    return (
        <main className="contenedor">
            <ListadoGuitarras guitarras={guitarras} />
        </main>
    );
}

export default Tienda;
