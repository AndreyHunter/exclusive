export interface Category {
  id: number;
  name: string;
  path: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  subcategories?: { id: number; name: string; path: string }[];
}

export interface Advantage {
  id: number;
  title: string;
  desc: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
export interface OurStatisticCard {
  id: number;
  desc: string;
  amount: number;
  changeOnHover: 'fill' | 'stroke';
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export interface TypePartnerCard {
  id: number;
  name: string;
  position: string;
  image: string;
  links?: {
    name: string;
    path: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  }[];
}
