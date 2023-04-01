//al ponerle el server en el nombre le indicamos a Remix que solo debe ejecutarse en el servidor este archivo
export async function getPosts() {
    const respuesta = await fetch(
        `${process.env.API_URL}/posts?populate=imagen`
    );
    //console.log(await respuesta.json())
    return await respuesta.json();
}

export async function getPost(url) {
    const respuesta = await fetch(
        `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
    );
    return respuesta.json();
}
