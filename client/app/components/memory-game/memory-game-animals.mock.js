const animalImages = [
  {
    name: 'fish',
    id: 1,
    url: 'https://images.unsplash.com/photo-1495594059084-33752639b9c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'pelican',
    id: 2,
    url: 'https://images.unsplash.com/photo-1550853352-10b7cbc75880?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=465&q=80',
  },
  {
    name: 'pinguins',
    id: 3,
    url: 'https://images.unsplash.com/photo-1582487809094-520150fdb872?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'flamingo',
    id: 4,
    url: 'https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'fox',
    id: 5,
    url: 'https://images.unsplash.com/photo-1535393857990-03242fe70580?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'deer',
    id: 6,
    url: 'https://images.unsplash.com/photo-1533582371776-be44a4a89609?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'owl',
    id: 7,
    url: 'https://images.unsplash.com/photo-1579264688258-c0ebf8c7942a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'bee',
    id: 8,
    url: 'https://images.unsplash.com/photo-1560806175-2e9e26340b2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'rhinos',
    id: 9,
    url: 'https://images.unsplash.com/flagged/photo-1557650454-65194af63bf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'tucan',
    id: 10,
    url: 'https://images.unsplash.com/photo-1530835073691-99f1d729027a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'fish',
    id: 11,
    url: 'https://images.unsplash.com/photo-1495594059084-33752639b9c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'pelican',
    id: 12,
    url: 'https://images.unsplash.com/photo-1550853352-10b7cbc75880?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=465&q=80',
  },
  {
    name: 'pinguins',
    id: 13,
    url: 'https://images.unsplash.com/photo-1582487809094-520150fdb872?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'flamingo',
    id: 14,
    url: 'https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'fox',
    id: 15,
    url: 'https://images.unsplash.com/photo-1535393857990-03242fe70580?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'deer',
    id: 16,
    url: 'https://images.unsplash.com/photo-1533582371776-be44a4a89609?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'owl',
    id: 17,
    url: 'https://images.unsplash.com/photo-1579264688258-c0ebf8c7942a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'bee',
    id: 18,
    url: 'https://images.unsplash.com/photo-1560806175-2e9e26340b2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'rhinos',
    id: 19,
    url: 'https://images.unsplash.com/flagged/photo-1557650454-65194af63bf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'tucan',
    id: 20,
    url: 'https://images.unsplash.com/photo-1530835073691-99f1d729027a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
];

export default animalImages;
