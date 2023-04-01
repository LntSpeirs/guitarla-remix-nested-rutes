import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import styles from "~/styles/blog.css";
import { formatearFecha } from "~/utils/helpers";

export async function loader({ params }) {
    const { postUrl } = params;
    const post = await getPost(postUrl);

    if (post.data.length === 0) {
        throw new Response("", {
            status: 404,
            statusText: "Post no encontrado",
        });
    }

    return post;
}

//El data en remix se pasa en automatico
export function meta({ data }) {
    if (!data) {
        return {
            title: "Post no encontrado",
            descripcion: "Blog, post no encontrado",
        };
    }

    return {
        title: `${data.data[0].attributes.titulo}`,
        descripcion: `Blog, post ${data.data[0].attributes.titulo}`,
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

function Post() {
    const post = useLoaderData();
    const { titulo, contenido, imagen, publishedAt } = post.data[0]?.attributes;

    return (
        <article className="contenedor post mt-3">
            <img
                className="imagen"
                src={imagen?.data?.attributes?.url}
                alt={`Imagen blog ${titulo}`}
            />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="texto">{contenido}</p>
            </div>
        </article>
    );
}

export default Post;
