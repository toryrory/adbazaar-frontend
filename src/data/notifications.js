import moment from 'moment';
// import { GreatGatsby, GoldenFool } from "../../public/books";
import { Img32Girl, Seller1 } from '../../public/png';

const date = new Date();
let time = moment(date.getTime());

export const notifications = [
  {
    id: 1,
    time: time.format('DD/MM/YYYY hh:mm'),
    checked: false,
    isRead: false,
    body: {
      book: {
        id: 1,
        title: 'The Great Gatsby',
        author: 'F.Scott Fitzgerald',
        rate: 4.5,
        reviews: 15,
        price: '82.15',
        image_path:
          'https://res.cloudinary.com/dn4dxdwur/image/upload/v1697100691/books/gctq0bfnfbxghgn3hfj6.jpg',
        status: 'active',
      },
      customer: {
        full_name: 'Mary May',
        phone: '+380 55 444 33 22',
        email: 'Example@gmai',
        image_path: Img32Girl,
        address: 'Kyiv Ukraine 01000 Independence street 1 / 1-33',
        shipping: 'Nova Poshta',
        payment: 'Payment upon receipt',
        promocode: null,
      },
    },
  },
  {
    id: 2,
    time: time.format('DD/MM/YYYY hh:mm'),
    checked: false,
    isRead: false,
    body: {
      book: {
        id: 2,
        title: 'Golden Fool',
        author: 'Robin Hobb',
        rate: 3.5,
        reviews: 6,
        price: '8.20',
        image_path:
          'https://res.cloudinary.com/dn4dxdwur/image/upload/v1697100692/books/wrx6i6cje3mhgovc0ogi.jpg',
        status: 'not active',
      },
      comment: {
        full_name: 'Mr. April',
        phone: '+380 55 444 33 22',
        email: 'blablabla@gmail.com',
        image_path: Seller1,
        message:
          'I am interested in buying this book from you, but I require additional information before making a purchase',
      },
    },
  },
  {
    id: 3,
    time: time.format('DD/MM/YYYY hh:mm'),
    checked: false,
    isRead: false,
    body: {
      book: {
        id: 1,
        title: 'The Great Gatsby',
        author: 'F.Scott Fitzgerald',
        rate: 4.5,
        reviews: 15,
        price: '82.15',
        image_path:
          'https://res.cloudinary.com/dn4dxdwur/image/upload/v1697100691/books/gctq0bfnfbxghgn3hfj6.jpg',
        status: 'active',
      },
      customer: {
        full_name: 'Mary May',
        phone: '+380 55 444 33 22',
        email: 'Example@gmai',
        image_path: Img32Girl,
        address: 'Kyiv Ukraine 01000 Independence street 1 / 1-33',
        shipping: 'Nova Poshta',
        payment: 'Payment upon receipt',
        promocode: null,
      },
    },
  },
  {
    id: 4,
    time: time.format('DD/MM/YYYY hh:mm'),
    checked: false,
    isRead: false,
    body: {
      book: {
        id: 2,
        title: 'Golden Fool',
        author: 'Robin Hobb',
        rate: 3.5,
        reviews: 6,
        price: '8.20',
        image_path:
          'https://res.cloudinary.com/dn4dxdwur/image/upload/v1697100692/books/wrx6i6cje3mhgovc0ogi.jpg',
        status: 'not active',
      },
      comment: {
        full_name: 'Mr. April',
        phone: '+380 55 444 33 22',
        email: 'blablabla@gmail.com',
        image_path: Seller1,
        message:
          'I am interested in buying this book from you, but I require additional information before making a purchase',
      },
    },
  },
];
