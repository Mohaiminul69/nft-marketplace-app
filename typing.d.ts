// Generated by https://quicktype.io

export interface NFTItem {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: string;
  bids?: Bid[];
}

export interface Bid {
  id: string;
  name: string;
  price: number;
  image: string;
  date: string;
}
