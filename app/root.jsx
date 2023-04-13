import { useState } from "react";
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link,
} from "@remix-run/react";
import Header from "~/components/header";
import Footer from "~/components/footer";
import styles from "~/styles/index.css";

//Agregar encabezados meta del html
export function meta() {
    return {
        charset: "utf-8",
        title: "GuitarLA - Remix",
        viewport: "width=device-width, initial-scale=1",
    };
}

//Exportar hojas de estilo
export function links() {
    return [
        {
            rel: "stylesheet",
            href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
        },
        {
            rel: "stylesheet",
            href: styles,
        },
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "true",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&family=Source+Sans+Pro:wght@400;600;700&display=swap",
        },
    ];
}

export default function App() {
    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (guitarra) => {
        console.log("Agregando...", guitarra);
        if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
            console.log("Ese elemento ya estaba en el carrito");
            //Iterar sobre el arreglo e identificar el elemento duplicado
            const carritoActualizado = carrito.map((guitarraState) => {
                if (guitarraState.id === guitarra.id) {
                    //Reescribir la cantidad
                    guitarraState.cantidad = guitarra.cantidad;
                    //Tambien se podria variar para que a la cantidad que ya habia le añada mas unidades
                    //guitarraState.cantidad += guitarra.cantidad;
                }
                return guitarraState;
            });
            //Añadir al carrito
            setCarrito(carritoActualizado);
        } else {
            //Registro nuevo asi que podemos agregar al carrito
            setCarrito([...carrito, guitarra]);
        }
    };

    const actualizarCantidad = (guitarra) => {
        const carritoActualizado = carrito.map((guitarraState) => {
            if (guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad;
            }
            return guitarraState;
        });
        setCarrito(carritoActualizado);
    };

    const eliminarGuitarra = (id) => {
        console.log("Eliminando...", id);
        //forma corta 
        setCarrito(carrito.filter((guitarraState) => guitarraState.id !== id));
        //forma entendible
        /* const carritoActualizado = carrito.filter((guitarraState) => guitarraState.id !== id)
        });
        setCarrito(carritoActualizado) */
    };

    return (
        <Document>
            <Outlet
                context={{
                    agregarCarrito: agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra,
                }}
            />
        </Document>
    );
}

function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

/** MANEJO DE ERRORES */
export function CatchBoundary() {
    const error = useCatch();
    return (
        <Document>
            <p className="error">
                Error inexperado: {error.status} - {error.statusText}
            </p>
            <Link className="error-enlace" to="/">
                Volver a la pagina principal
            </Link>
        </Document>
    );
}

export function ErrorBoundary({ error }) {
    return (
        <Document>
            <p className="error">
                Error inexperado: {error.status} - {error.statusText}
            </p>
            <Link className="error-enlace" to="/">
                Volver a la pagina principal
            </Link>
        </Document>
    );
}
