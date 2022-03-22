# TSDX React User Guide

```javascript
import { ProductCard } from 'fp-product-card';

<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ reset, count, isMaxCountReached, increaseBy }) => (
    <>
      <ProductCard.Image />
      <ProductCard.Title />
      <ProductCard.Buttons />
    </>
  )}
</ProductCard>;
```
