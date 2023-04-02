import Layout from "../components/layout";
import { GetStarted } from '../components/get-started';
import Link from "next/link";


async function getPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}

export default function Home ({ photos }) {
    return (
        <>
            <Layout>
                <GetStarted />
                <div className="gallery gallery_list">
                    {photos.map((photo) => {
                        return (
                            <>
                                <div className="gallery__item" key={photo.id}>
                                    <Link href={`/gallery/${photo.id}`}>
                                        <img src={photo.thumbnailUrl} />
                                        <p>{photo.title}</p>
                                    </Link>
                                </div>
                            </>
                        )
                    })}
                </div>
            </Layout>
        </>
    );
}

export async function getServerSideProps(req, res) {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photos = await response.json();
    return { props: { photos: photos.slice(0, 2) } }
}
