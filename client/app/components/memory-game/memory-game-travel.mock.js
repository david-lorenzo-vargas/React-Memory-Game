const travelImages = [
  {
    name: 'map',
    id: 1,
    url: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=487&q=80',
  },
  {
    name: 'caribe',
    id: 2,
    url: 'https://images.unsplash.com/photo-1443181844940-9042ec79924b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=501&q=80',
  },
  {
    name: 'jordan',
    id: 3,
    url: 'https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'dune',
    id: 4,
    url: 'https://images.unsplash.com/photo-1523653049681-701d71cf57c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1412&q=80',
  },
  {
    name: 'beach',
    id: 5,
    url: 'https://images.unsplash.com/photo-1517325619117-a469256220f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'morocco',
    id: 6,
    url: 'https://images.unsplash.com/photo-1517821099606-cef63a9bcda6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=548&q=80',
  },
  {
    name: 'paris',
    id: 7,
    url: 'https://images.unsplash.com/photo-1545721264-afab304e89d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'venize',
    id: 8,
    url: 'https://images.unsplash.com/photo-1602532769631-f27de70308ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'london',
    id: 9,
    url: 'https://images.unsplash.com/photo-1527259047647-731b8be6fd42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'new zeland',
    id: 10,
    url: 'https://images.unsplash.com/photo-1578127033857-8b1450a3b0ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'map',
    id: 11,
    url: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=487&q=80',
  },
  {
    name: 'caribe',
    id: 12,
    url: 'https://images.unsplash.com/photo-1443181844940-9042ec79924b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=501&q=80',
  },
  {
    name: 'jordan',
    id: 13,
    url: 'https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'dune',
    id: 14,
    url: 'https://images.unsplash.com/photo-1523653049681-701d71cf57c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1412&q=80',
  },
  {
    name: 'beach',
    id: 15,
    url: 'https://images.unsplash.com/photo-1517325619117-a469256220f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'morocco',
    id: 16,
    url: 'https://images.unsplash.com/photo-1517821099606-cef63a9bcda6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=548&q=80',
  },
  {
    name: 'paris',
    id: 17,
    url: 'https://images.unsplash.com/photo-1545721264-afab304e89d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'venize',
    id: 18,
    url: 'https://images.unsplash.com/photo-1602532769631-f27de70308ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'london',
    id: 19,
    url: 'https://images.unsplash.com/photo-1527259047647-731b8be6fd42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'new zeland',
    id: 20,
    url: 'https://images.unsplash.com/photo-1578127033857-8b1450a3b0ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
];

export default travelImages;
