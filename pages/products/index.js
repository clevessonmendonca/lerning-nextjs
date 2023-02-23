import Link from 'next/link'

export default function Products() {
  return (
    <div>
      <h1>Pagina de Produtos</h1>
      <Link href="products/shirt">Shirt</Link>
      <br/>
      <Link href="products/pants">Pants</Link>
    </div>
  )
}