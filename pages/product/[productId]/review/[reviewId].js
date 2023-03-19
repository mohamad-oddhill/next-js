import { useRouter } from "next/router";

function ProductReview () {
    const router = useRouter();

    const {productId, reviewId } = router.query;

    return (
        <>
            <h2>Review {reviewId} form product {productId}</h2>
        </>
    );
}

export default ProductReview;