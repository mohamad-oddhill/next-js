import Link from "next/link";
import Layout from "pages/components/layout";
function PostList({ posts }) {
    return (
        <>
            <Layout>
                <h1>List of posts</h1>
                {posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <Link href={`/posts/${post.id}`}>
                                <h2>{post.id} { post.title }</h2>
                            </Link>
                        <hr />
                    </div>
                    )
                })}
            </Layout>
        </>
    );
}

export default PostList;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {
        props: {
            posts: data,
        }
    }
}