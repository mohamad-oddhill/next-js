import { useRouter } from "next/router";
import Layout from "../../components/layout";

function Doc () {
    const router = useRouter();
    const { params = [] } = router.query;
    let content = '';

    if (params.length === 1) {
        content = <h1>Level 1</h1>
    }
    else if(params.length === 2) {
        content = <h1>Level 2</h1>
    }

    content = <h1>Level 0</h1>

    return (
        <>
            <Layout>
                content
            </Layout>
        </>
    );
}

export default Doc;