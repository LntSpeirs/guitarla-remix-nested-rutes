import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";
import { useOutletContext } from "@remix-run/react";

export function meta() {
    return {
        title: "GuitarLA - Nosotros",
        description: "Venta de guitarras, blog de musica y demas",
    };
}

export function links() {
    return [
        {
            rel: "styleSheet",
            href: styles,
        },
        {
            rel: "preload",
            href: imagen,
            as: "image",
        },
    ];
}

function Nosotros() {
    const data = useOutletContext();
    console.log(data);
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>
            <div className="contenido">
                <img src={imagen} alt="Imagen sobre nosotros" />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras molestie, risus sit amet auctor commodo, nisi eros
                        vehicula ante, quis consectetur odio velit eu magna.
                        Proin auctor dignissim turpis, sit amet commodo sem
                        finibus vulputate. Duis lobortis vitae lectus eu
                        facilisis. Praesent non nulla felis. Nunc erat justo,
                        mattis at ipsum a, dapibus interdum ipsum. Praesent
                        consequat purus dui, quis interdum nunc tempor ut.
                        Praesent porta et odio a tempus. Pellentesque tempor
                        pretium lorem. Nullam dignissim id dui ut tempor.
                        Maecenas ac nibh at ligula cursus lacinia. Nulla libero
                        mi, rhoncus at felis a, luctus placerat eros. Proin
                        lacinia vulputate laoreet. Sed sit amet nunc tempor,
                        vehicula augue vel, semper dui. Duis sagittis maximus
                        purus, sollicitudin commodo velit cursus id.
                    </p>

                    <p>
                        Etiam congue consectetur tortor sit amet ullamcorper.
                        Vivamus id aliquet mauris, quis fermentum ipsum. Cras
                        enim metus, ornare et neque nec, dictum blandit nunc.
                        Nullam non hendrerit ligula, ac pulvinar orci. Maecenas
                        vel nisl et augue tempus hendrerit mollis ut neque.
                        Vivamus fermentum mauris ac tellus mollis iaculis. Ut
                        varius facilisis maximus. Proin quis sagittis tellus.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Nosotros;
