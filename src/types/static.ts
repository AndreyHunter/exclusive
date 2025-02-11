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
