import { derived, writable } from 'svelte/store';

export const products = writable([
  {
    name: 'Model One',
    price: 9999.99,
    image: 'https://placehold.co/400?text=Model+One',
  },
  {
    name: 'Model Two',
    price: 5999.99,
    image: 'https://placehold.co/400?text=Model+Two',
  },
  {
    name: 'Model Three',
    price: 7999.99,
    image: 'https://placehold.co/400?text=Model+Three',
  },
  {
    name: 'Model Four',
    price: 12999.99,
    image: 'https://placehold.co/400?text=Model+Four',
  },
  {
    name: 'Model Five',
    price: 1999.99,
    image: 'https://placehold.co/400?text=Model+Five',
  },
  {
    name: 'Model Six',
    price: 999.99,
    image: 'https://placehold.co/400?text=Model+Six',
  },
  {
    name: 'Model Seven',
    price: 2499.99,
    image: 'https://placehold.co/400?text=Model+Seven',
  },
]);

export const bagItems = writable(new Map());

export const bagSubtotal = derived(bagItems, ($bagItems) => {
  let subtotal = 0;

  $bagItems.forEach((value, key) => {
    subtotal += value * key.price;
  });

  return subtotal;
});
