const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 59.99,
    image: 'https://placehold.co/300x200/e2e8f0/475569?text=Headphones',
    description:
      'High-quality wireless headphones with noise cancellation and 20-hour battery life.',
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    price: 89.99,
    image: 'https://placehold.co/300x200/e2e8f0/475569?text=Keyboard',
    description:
      'RGB mechanical keyboard with Cherry MX switches and programmable keys.',
  },
  {
    id: 3,
    name: 'USB-C Hub',
    price: 34.99,
    image: 'https://placehold.co/300x200/e2e8f0/475569?text=USB-C+Hub',
    description:
      '7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and PD charging.',
  },
  {
    id: 4,
    name: 'Webcam HD',
    price: 49.99,
    image: 'https://placehold.co/300x200/e2e8f0/475569?text=Webcam',
    description:
      '1080p HD webcam with auto-focus, built-in microphone, and privacy cover.',
  },
  {
    id: 5,
    name: 'Mouse Pad XL',
    price: 19.99,
    image: 'https://placehold.co/300x200/e2e8f0/475569?text=Mouse+Pad',
    description:
      'Extended mouse pad with anti-slip rubber base and smooth cloth surface.',
  },
  {
    id: 6,
    name: 'Monitor Stand',
    price: 29.99,
    image: 'https://placehold.co/300x200/e2e8f0/475569?text=Monitor+Stand',
    description:
      'Adjustable monitor stand with storage drawer and cable management.',
  },
];

export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'));
  const product = products.find((p) => p.id === id);

  if (!product) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' });
  }

  return product;
});
