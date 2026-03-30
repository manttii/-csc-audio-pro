import ProductsCategoryClient from './ProductsCategoryClient'

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ category?: string }>
}) {
  const { category } = await params

  return <ProductsCategoryClient category={category} />
}