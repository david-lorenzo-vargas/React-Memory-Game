
const images = [
  {
    name: 'ice cream',
    id: 1,
    url: 'https://images.unsplash.com/photo-1536351425844-145ebdae32d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'bananas',
    id: 2,
    url: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'flower',
    id: 3,
    url: 'https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'flamingo',
    id: 4,
    url: 'https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'sunflower',
    id: 5,
    url: 'https://images.unsplash.com/photo-1603973684108-e712f8652a39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'thailand',
    id: 6,
    url: 'https://images.unsplash.com/photo-1584636778264-dc699075d838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'temple',
    id: 7,
    url: 'https://images.unsplash.com/photo-1569155829632-148eea0844af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=479&q=80',
  },
  {
    name: 'waves',
    id: 8,
    url: 'https://images.unsplash.com/photo-1525054098605-8e762c017741?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'plane',
    id: 9,
    url: 'https://images.unsplash.com/photo-1496054682147-258414043211?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'nature',
    id: 10,
    url: 'https://images.unsplash.com/photo-1600976344444-9f417b4e97ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=501&q=80',
  },
  {
    name: 'ice cream',
    id: 11,
    url: 'https://images.unsplash.com/photo-1536351425844-145ebdae32d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'bananas',
    id: 12,
    url: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'flower',
    id: 13,
    url: 'https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'flamingo',
    id: 14,
    url: 'https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'sunflower',
    id: 15,
    url: 'https://images.unsplash.com/photo-1603973684108-e712f8652a39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'thailand',
    id: 16,
    url: 'https://images.unsplash.com/photo-1584636778264-dc699075d838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'temple',
    id: 17,
    url: 'https://images.unsplash.com/photo-1569155829632-148eea0844af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=479&q=80',
  },
  {
    name: 'waves',
    id: 18,
    url: 'https://images.unsplash.com/photo-1525054098605-8e762c017741?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'plane',
    id: 19,
    url: 'https://images.unsplash.com/photo-1496054682147-258414043211?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'nature',
    id: 20,
    url: 'https://images.unsplash.com/photo-1600976344444-9f417b4e97ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=501&q=80',
  },
];

export default images;
