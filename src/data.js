// import hero slider images
import HeroSlideImage1 from './assets/img/cars/car-slide-1.png';
import HeroSlideImage2 from './assets/img/cars/car-slide-2.png';
import HeroSlideImage3 from './assets/img/cars/car-slide-3.png';
// import social icons
import { AiFillYoutube, AiFillInstagram, AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

export const navigation = [
  {
    name: 'home',
    href: '#',
  },
  {
    name: 'prices',
    href: '#prices',
  },
  {
    name: 'contact',
    href: '#footer',
  },
  {
    name: 'get an appointment',
    href: '#appointment',
  },
  {
    name: 'office',
    href: '#',
  },
];

export const heroSlider = [
  {
    id: 1,
    title: 'We take care of your car.',
    image: <HeroSlideImage1 />,
    subtitle:
      'Over 5 years of experience!',
    buttonText: 'Get an appointment',
  },
  {
    id: 2,
    title: 'Our passion is quality.',
    image: <HeroSlideImage2 />,
    subtitle:
      'we offer ecu tuning at the highest quality!',
    buttonText: 'Get an appointment',
  },
  {
    id: 3,
    title: 'Only satisfied customers.',
    image: <HeroSlideImage3 />,
    subtitle:
      'You leave our gates satisfied!',
    buttonText: 'Get an appointment',
  },
];

export const bundleData = [
  {
    id: 1,
    services: [
      {
        name: 'Stage 1',
        price: 300,
        list: ['service 1','service 2','service 3'],
      },
      {
        name: 'Stage 2',
        price: 400,
        list: [
          'all smart services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
        ],
      },
      {
        name: 'Stage 3',
        price: 600,
        list: [
          'all premium services',
          'service 1',
          'service 2',
          'service 3',
          'service 4',
          'service 5',
          'service 6',
        ],
      },
    ],
  },
  
];

export const social = [
  {
    icon: <AiFillFacebook />,
    href: '#',
  },
  {
    icon: <AiFillInstagram />,
    href: '#',
  },
  {
    icon: <AiFillLinkedin />,
    href: '#',
  },
];
