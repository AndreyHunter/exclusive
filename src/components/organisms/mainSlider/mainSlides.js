import iphone14Image from '../../../assets/images/mainSlider/iphone14.png';
import macbookProImage from '../../../assets/images/mainSlider/macbook_pro.jpg';
import appleLogo from '../../../assets/images/mainSlider/apple_logo.jpg';

const mainSlides = [
    {
        id: 1,
        productName: 'iPhone 14 Series',
        title: 'Up to 10% off Voucher',
        link: '/iPhone14',
        backgroundColor: '#000',
        images: {
            image: iphone14Image,
            icon: appleLogo,
        },
    },
    {
        id: 2,
        productName: 'MacBook Pro',
        title: 'Special Offer: $150 off',
        link: '/MacBookPro',
        backgroundColor: '#000',
        images: {
            image: macbookProImage,
            icon: appleLogo,
        },
    },
];

export default mainSlides;