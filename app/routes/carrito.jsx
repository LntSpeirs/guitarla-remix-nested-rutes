import { useOutletContext } from "@remix-run/react";
import { useEffect, useState } from "react";
import styles from "../styles/carrito.css";
//Para solucionar el problema de la hidratacion instalamos remix-utils para decirle que el carrito se renderiza solo en el lado del cliente
import { ClientOnly } from "remix-utils";

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
    const [total, setTotal] = useState(0);
    const { carrito, actualizarCantidad, eliminarGuitarra } =
        useOutletContext();

    //Cada vez que carrito cambie hay que actualizar el total a pagar
    useEffect(() => {
        const calculoTotal = carrito.reduce(
            (total, producto) => total + producto.cantidad * producto.precio,
            0
        );
        setTotal(calculoTotal);
    }, [carrito]);

    return (
        <ClientOnly fallback={"Cargando..."}>
            {() => (
                <main className="contenedor">
                    <h1 className="heading">Carrito de compras</h1>

                    <div className="contenido">
                        <div className="carrito">
                            <h2>Articulos</h2>
                            {carrito?.length === 0
                                ? "Carrito vacio"
                                : carrito?.map((producto) => {
                                      return (
                                          <div
                                              key={producto.id}
                                              className="producto"
                                          >
                                              <div>
                                                  <img
                                                      src={producto.imagen}
                                                      alt={`Imagen del producto ${producto.nombre}`}
                                                  />
                                              </div>
                                              <div>
                                                  <p className="nombre">
                                                      {producto.nombre}
                                                  </p>
                                                  <p className="precio">
                                                      <span>
                                                          {producto.precio}
                                                      </span>
                                                      €<p>Cantidad:</p>
                                                      <select
                                                          value={
                                                              producto.cantidad
                                                          }
                                                          className="select"
                                                          onChange={(e) =>
                                                              actualizarCantidad(
                                                                  {
                                                                      cantidad:
                                                                          +e
                                                                              .target
                                                                              .value,
                                                                      id: producto.id,
                                                                  }
                                                              )
                                                          }
                                                      >
                                                          <option value="1">
                                                              1
                                                          </option>
                                                          <option value="2">
                                                              2
                                                          </option>
                                                          <option value="3">
                                                              3
                                                          </option>
                                                          <option value="4">
                                                              4
                                                          </option>
                                                          <option value="5">
                                                              5
                                                          </option>
                                                      </select>
                                                  </p>
                                                  <p className="total">
                                                      <span>
                                                          Total:{" "}
                                                          {producto.precio *
                                                              producto.cantidad}
                                                      </span>
                                                      €
                                                  </p>
                                              </div>
                                              <button
                                                  type="button"
                                                  className="btn_eliminar"
                                                  onClick={() =>
                                                      eliminarGuitarra(
                                                          producto.id
                                                      )
                                                  }
                                              >
                                                  ❌
                                              </button>
                                          </div>
                                      );
                                  })}
                        </div>
                    </div>

                    <aside className="resumen">
                        <h3>Resumen del Pedido</h3>
                        <p>Total a pagar: {total}€</p>
                    </aside>
                </main>
            )}
        </ClientOnly>
    );
};

export default carrito;
