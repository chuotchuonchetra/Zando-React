export interface SizeStock {
  size: string;
  quantity: number;
}

export interface ColorVariant {
  color: string;
  image: string;
  sizesAvailable: SizeStock[];
  detailImages: string[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  thumbnail: string;
  code: number;
  productDetail: string;
  colorsAvailable: ColorVariant[];
  category: string;
  brand: string;
}

export interface Collection {
  id: string;
  title: string;
  products: Product[];
}
