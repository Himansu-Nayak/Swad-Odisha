import { MenuItem, Chef } from '../types';

export const DISHES: MenuItem[] = [
  {
    id: '1',
    name: 'Pakhala Bhata',
    description: "Odisha's iconic summer staple. Fermented rice served with accompaniments.",
    price: 99,
    category: 'rice',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '2',
    name: 'Chhena Poda',
    description: 'The original cheesecake of India. Caramelized cottage cheese dessert.',
    price: 149,
    category: 'sweet',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '3',
    name: 'Dalma',
    description: 'Soul food of every Odia household. Lentils cooked with seasonal vegetables.',
    price: 129,
    category: 'curry',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '4',
    name: 'Machha Besara',
    description: 'River fish cooked in a sharp and aromatic mustard-turmeric gravy.',
    price: 249,
    category: 'curry',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '5',
    name: 'Santula',
    description: 'Nutritious everyday classic. Light steamed vegetable medley.',
    price: 119,
    category: 'curry',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '6',
    name: 'Rasabali',
    description: 'Divine sweet from Kendrapara. Flattened cottage cheese discs in thickened milk.',
    price: 169,
    category: 'sweet',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '7',
    name: 'Chhena Jhili',
    description: "Odisha's answer to gulab jamun. Soft paneer donuts in sugar syrup.",
    price: 139,
    category: 'sweet',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1589112106030-85ecfd631844?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '8',
    name: 'Pitha Platter',
    description: 'Festival special. Assorted rice-flour dumplings: Arisha, Manda, Enduri.',
    price: 199,
    category: 'snack',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=1200&q=80'
  },
];

export const DISHES_DISPLAY = [
  { name:'Pakhala Bhata', origin:'Cuttack · Coastal', price:'₹80', emoji:'🍚' },
  { name:'Chhena Poda', origin:'Nayagarh · Central', price:'₹60', emoji:'🍮' },
  { name:'Dalma', origin:'Classic · Odisha', price:'₹90', emoji:'🥘' },
  { name:'Macha Besara', origin:'Coastal · Puri', price:'₹150', emoji:'🐟' },
  { name:'Santula', origin:'Western · Sambalpur', price:'₹70', emoji:'🥗' },
  { name:'Arisha Pitha', origin:'Festive · Statewide', price:'₹120', emoji:'🫓' },
  { name:'Saga Bhaja', origin:'Everyday · Odisha', price:'₹50', emoji:'🌿' },
  { name:'Rasabali', origin:'Kendrapara · Temple', price:'₹65', emoji:'🍯' },
];

export const CHEFS: Chef[] = [
  { 
    id: 'kamala',
    name: 'Kamala Devi', 
    city: 'Bhubaneswar', 
    specialty: 'Pitha & Sweets',
    bio: 'Preserving the age-old traditions of Odia sweets for over 30 years.'
  },
  { 
    id: 'sarat',
    name: 'Sarat Panda', 
    city: 'Cuttack', 
    specialty: 'Seafood',
    bio: 'Expert in coastal Odia delicacies, bringing the ocean to your plate.'
  },
  { 
    id: 'priya',
    name: 'Priya Mohanty', 
    city: 'Puri', 
    specialty: 'Mithai',
    bio: 'Crafting divine offerings inspired by the Jagannath Temple cuisine.'
  }
];
