import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;


export default function() {
  return (
    <>
      <Title title="Tienda" subtitle="todos los productos" className="mb-2" />

        <ProductGrid products={products}/>
    </>
  );
}
