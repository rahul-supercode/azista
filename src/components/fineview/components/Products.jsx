import DatasheetRequest from "@/components/shared/components/DatasheetRequest";

import styles from "../css/Products.module.css";
import { products } from "../data/products";
import ProductNav from "./ProductNav";
import ProductRow from "./ProductRow";

const NAV_ITEMS = products.map(({ id, name }) => ({ id, label: name }));

/** Figma: product nav (3035:16450) and the four imager rows. */
export default function Products() {
  return (
    <section aria-label="Fineview series imagers" className={styles.section}>
      <ProductNav label="Fineview series imagers" items={NAV_ITEMS} />
      <DatasheetRequest>
        <div className={`container ${styles.list}`}>
          {products.map((product, index) => (
            <ProductRow
              key={product.id}
              product={product}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </DatasheetRequest>
    </section>
  );
}
