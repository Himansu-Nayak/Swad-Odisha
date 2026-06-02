export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Veg' | 'Non-Veg' | 'Sweets' | 'Specials';
  isVeg: boolean;
  image?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
