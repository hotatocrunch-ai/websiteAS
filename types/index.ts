export type ProductCategory =
  | 'seragam-sekolah'
  | 'seragam-perusahaan'
  | 'kaos-custom'
  | 'bahan-kain'
  | 'polo-shirt'
  | 'jaket'
  | 'wearpack'
  | 'atribut-sekolah';

export type ProductColor = {
  name: string;
  hex: string;
};

export type ProductSize = 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'All Size';

export type PriceTier = {
  minQty: number;
  maxQty: number | null;
  price: number;
  label: string;
};

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  images: string[];
  basePrice: number;
  priceTiers: PriceTier[];
  colors: ProductColor[];
  sizes: ProductSize[];
  rating: number;
  reviewCount: number;
  badge?: string;
  features: string[];
  specifications: { label: string; value: string }[];
  shopeeUrl?: string;
};

export type Category = {
  slug: ProductCategory;
  name: string;
  description: string;
  image: string;
  icon: string;
  productCount: number;
};

export type Inquiry = {
  id: string;
  nama: string;
  whatsapp: string;
  email: string;
  produk: string;
  jumlah: number;
  pesan: string;
  status: 'new' | 'contacted' | 'closed';
  created_at: string;
};

export type InquiryInput = {
  nama: string;
  whatsapp: string;
  email: string;
  produk: string;
  jumlah: number;
  pesan: string;
};
