import { ProductGrid, ProductGridItem, Title } from "@/components";
import { Product, Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Category;
  };
}

const productsSeed = initialData.products;

export default function ({ params }: Props) {
  const { id } = params;

  const filter = ["kid", "women", "men"];
  let element = "";
  for (let index = 0; index < filter.length; index++) {
    if (id === filter[index]) element = filter[index];
  }

  if (element.length === 0) {
    notFound();
  }
  const products = productsSeed.filter((product) => product.gender === id);

  const labels:Record<Category,string>= {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex': 'para todos'
  }

  return (
    <>
      <Title title={`Artículos ${labels[id]}`}  subtitle='Todos los productos' className="mb-2" />

      <ProductGrid products={products} />
    </>
  );
}
