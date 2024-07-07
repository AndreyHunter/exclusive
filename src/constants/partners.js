import Partner1Image from '@assets/images/partners/5afc043392ee3cbb529f429b3e2098d3.png';
import Partner3Image from '@assets/images/partners/5df8103b281240ce5bafe5dd7d215ab8.png';
import Partner2Image from '@assets/images/partners/a2fe88af0272adecd83422d0cb7e20d7.png';

const partners = [
    {
        id: 1,
        name: 'Alexander Graham',
        position: 'Founder & Chairman',
        image: Partner1Image,
        links: {
            linkedin: null,
            instagram: 'https://www.instagram.com/',
            facebook: null,
            twitter: 'https://x.com/?lang=en',
        },
    },
    {
        id: 2,
        name: 'Catherine Johnson',
        position: 'Managing Director',
        image: Partner2Image,
        links: {
            linkedin: null,
            instagram: null,
            facebook: null,
            twitter: 'https://x.com/?lang=en',
        },
    },
    {
        id: 3,
        name: 'Michael Anderson',
        position: 'Product Designer',
        image: Partner3Image,
        links: {
            linkedin: 'https://ua.linkedin.com/',
            instagram: null,
            facebook: null,
            twitter: 'https://x.com/?lang=en',
        },
    },
];

export default partners;
