import Partner1Image from '@assets/images/partners/5afc043392ee3cbb529f429b3e2098d3.png';
import Partner3Image from '@assets/images/partners/5df8103b281240ce5bafe5dd7d215ab8.png';
import Partner2Image from '@assets/images/partners/a2fe88af0272adecd83422d0cb7e20d7.png';
import InstagramIcon from '@assets/icons/instagram.svg?react';
import LinkedinIcon from '@assets/icons/linkedin.svg?react';
import TwitterIcon from '@assets/icons/twitter.svg?react';
import type { TypePartnerCard } from 'types/static';

export const partners: TypePartnerCard[] = [
  {
    id: 1,
    name: 'Alexander Graham',
    position: 'Founder & Chairman',
    image: Partner1Image,
    links: [
      { name: 'instagram', path: 'https://www.instagram.com/', icon: InstagramIcon },
      { name: 'twitter', path: 'https://x.com/?lang=en', icon: TwitterIcon },
    ],
  },
  {
    id: 2,
    name: 'Catherine Johnson',
    position: 'Managing Director',
    image: Partner2Image,
    links: [{ name: 'twitter', path: 'https://x.com/?lang=en', icon: TwitterIcon }],
  },
  {
    id: 3,
    name: 'Michael Anderson',
    position: 'Product Designer',
    image: Partner3Image,
    links: [
      {
        name: 'linkedin',
        path: 'https://ua.linkedin.com/',
        icon: LinkedinIcon,
      },
      { name: 'twitter', path: 'https://x.com/?lang=en', icon: TwitterIcon },
    ],
  },
];
