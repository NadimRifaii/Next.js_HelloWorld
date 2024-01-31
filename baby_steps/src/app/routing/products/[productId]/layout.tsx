export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <h2>Feature products</h2>
    </>
  )
}
/**
 * The children here corresponds to the page.tsx of the productId folder
 */