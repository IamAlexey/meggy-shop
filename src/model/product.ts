export interface Currency {
  id: number;
  name: string;
}

export interface Price {
  amount: string;
  currency: Currency;
  text: string;
}

export interface Section {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  section: Section;
}

export interface Item {
  id: number;
  owner_id: number;
  title: string;
  description: string;
  price: Price;
  category: Category;
  date: number;
  thumb_photo: string;
  availability: number;
}

export interface Response {
  count: number;
  items: Item[];
}

export interface RootObject {
  response: Response;
}
