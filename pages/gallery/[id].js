import Layout from "../../components/layout";

function Gallery({ photo, post }) {
    return (
        <>
          <Layout>
              <div>
                  <h1>{post.title}</h1>
                  <figure>
                    <img src={photo.url} />
                      <figcaption>{photo.title}</figcaption>
                  </figure>
                  <p>{post.body}</p>
              </div>
          </Layout>
        </>
    );
}

export async function getServerSideProps(context) {
    const { params } = context;

    const [photoRes, postRes] = await Promise.all([
        await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`),
        await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
    ]);

    const [photo, post] = await Promise.all([
        await photoRes.json(),
        await postRes.json()
    ]);

    return { props: { photo, post } }
}

export default Gallery;
