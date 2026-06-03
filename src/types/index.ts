export interface FAQ {
  q: string;
  a: string;
}

export interface Workshop {
  title: string;
  artist: string;
  location: string;
  price: string;
  originalPrice: string;
  img: string;
  left: number;
  top: number;
  fontClass?: string;
}

export interface CartItem {
  id: string;
  title: string;
  artist: string;
  date: string;
  time: string;
  price: number;
  originalPrice: number;
  quantity: number;
  img: string;
}

export interface UploadedImage {
  id: number;
  name: string;
  url: string;
  alt: string;
}

export interface ArtisanFAQ {
  question: string;
  answer: string;
}

export interface BookedWorkshop {
  title: string;
  price: string;
  img: string;
  genre: string;
  type: string;
  location: string;
  artisan: string;
  duration: string;
  date: string;
}

export interface WrittenReview {
  title: string;
  date: string;
  rating: string;
  comment: string;
}

export interface Testimonial {
  name: string;
  role: string;
  img: string;
  left: number;
  quote: string;
}

export interface ArtisanCard {
  id: number;
  img: string;
  left: number;
  top: number;
  title: string;
  name?: string;
  sub?: string;
}

export interface CustomerReview {
  author: string;
  date: string;
  rating: string;
  workshopName: string;
  comment: string;
}

export interface OwnedWorkshop {
  id: number;
  title: string;
  description: string;
}
