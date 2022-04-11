import { useSelector } from "react-redux";

import { categoriesSelector } from "../../store/categories/categories.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categories = useSelector(categoriesSelector);

  return (
    <>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
