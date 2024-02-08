# Product

```ts
export interface Product {
  id: number
  name: string
  supplierId: number
  categoryId: number
  quantityPerUnit: string
  unitPrice: number
  unitsInStock: number
  unitsOnOrder: number
  reorderLevel: number
  discontinued: boolean
  category: Category
}
```


```ts
export interface Product {
  ProductID: number
  ProductName: string
  SupplierID: number
  CategoryID: number
  QuantityPerUnit: string
  UnitPrice: number
  UnitsInStock: number
  UnitsOnOrder: number
  ReorderLevel: number
  Discontinued: boolean
  Category: Category
}
```
