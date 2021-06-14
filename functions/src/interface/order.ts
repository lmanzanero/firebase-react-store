interface Order {
  productId: string,
  name: string,
  phone: string,
  promoCode: string,
  createdAt: Date,
  isPaid: boolean,
  status: Status
}