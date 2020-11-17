const foodImages = [
  {
    name: 'berries',
    id: 1,
    url: 'https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'orange cake',
    id: 2,
    url: 'https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=469&q=80',
  },
  {
    name: 'garlics',
    id: 3,
    url: 'https://images.unsplash.com/photo-1441861539200-6208cf4a122f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'lemon and mint',
    id: 4,
    url: 'https://images.unsplash.com/photo-1543364195-077a16c30ff3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'spinach',
    id: 5,
    url: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'oranges',
    id: 6,
    url: 'https://images.unsplash.com/photo-1582087463261-ddea03f80e5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'nut',
    id: 7,
    url: 'https://images.unsplash.com/flagged/photo-1579410137922-543ed48d263e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'toast',
    id: 8,
    url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'burguer',
    id: 9,
    url: 'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'carrots',
    id: 10,
    url: 'https://images.unsplash.com/photo-1528505086635-4c69d5f10908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=489&q=80',
  },
  {
    name: 'berries',
    id: 11,
    url: 'https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'orange cake',
    id: 12,
    url: 'https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=469&q=80',
  },
  {
    name: 'garlics',
    id: 13,
    url: 'https://images.unsplash.com/photo-1441861539200-6208cf4a122f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'lemon and mint',
    id: 14,
    url: 'https://images.unsplash.com/photo-1543364195-077a16c30ff3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'spinach',
    id: 15,
    url: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'oranges',
    id: 16,
    url: 'https://images.unsplash.com/photo-1582087463261-ddea03f80e5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'nut',
    id: 17,
    url: 'https://images.unsplash.com/flagged/photo-1579410137922-543ed48d263e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'toast',
    id: 18,
    url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'burguer',
    id: 19,
    url: 'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'carrots',
    id: 20,
    url: 'https://images.unsplash.com/photo-1528505086635-4c69d5f10908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=489&q=80',
  },
];

export default foodImages;
