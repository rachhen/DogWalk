export const detailData = {
  title: 'Gnocchi',
  age: '4 months',
  size: 'Small',
  sex: 'Female',
  location: 'Kastanienallee, Berlin',
  serviceType: 'Dog Walking',
  serviceTypeIcon: 'md-paw-outline',
  serviceHours: [
    {day: 'Mon', startTime: '7AM', endTime: '8 AM', isBooked: true},
    {day: 'Tue', startTime: '7AM', endTime: '8 AM', isBooked: false},
    {day: 'Wed', startTime: '7AM', endTime: '8 AM', isBooked: false},
    {day: 'Thu', startTime: '7AM', endTime: '8 AM', isBooked: true},
    {day: 'Fri', startTime: '7AM', endTime: '8 AM', isBooked: false},
  ],
  serviceNote:
    'Please note that, this service is not one-time. It will occur in every week.',
  price: 12,
  details:
    'Gnocchi is lovely and well trained dog. She loves to pull a little bit when she sees other dogs.',
  human: {
    name: 'David Warner',
    email: 'hello@davidwarner.com',
    avatar:
      'https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508_1280.jpg',
  },
};
