declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';
declare module '*.webp';

declare module '*.svg?react' {
  import type * as React from 'react';

  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}
