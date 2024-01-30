export default function productReview({ params }: {
  params: {
    productId: string,
    reviewId: string
  }
}) {
  return <h1>Review {params.reviewId} of product {params.productId}</h1>
}