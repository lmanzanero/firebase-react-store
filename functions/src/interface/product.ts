interface Product {
  id: string,
  name: string,
  slug: string,
  price: string,
  description: string,
  category: [Category]
  image: Image, 
}