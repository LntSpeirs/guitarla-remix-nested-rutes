import styles from "../styles/carrito.css";

export function links() {
    return [
        {
            rel: "styleSheet",
            href: styles,
        },
    ];
}

export function meta() {
  return {
      title: "GuitarLA - Carrito de compras",
      description: "Carrito de compras",
  };
}

const carrito = () => {
    return (
        <main className="contenedor">
            <h1 className="heading">Carrito de compras</h1>

            <div className="contenido">
                <div className="carrito">
                    <h2>Articulos</h2>
                </div>
            </div>

            <aside className="resumen">
                <h3>Resumen del Pedido</h3>
                <p>Total a pagar: </p>
            </aside>
        </main>
    );
};

export default carrito;
