import ak900KeyboardImage from '@assets/images/products/ak-900-wired-keyboard.png';
import asusLaptopImage from '@assets/images/products/asus-fhd-gaming-laptop.png';
import dogFoodImage from '@assets/images/products/breed-dry-dog-food.jpg';
import canonCameraImage from '@assets/images/products/canon-eos-dslr-camera.png';
import curologySetImage from '@assets/images/products/curology-product-set.png';
import gp11GamepadImage from '@assets/images/products/gp11-shooter-usb-gamepad.png';
import gucciBagImage from '@assets/images/products/gucci-duffle-bag.png';
import havitGamepadImage from '@assets/images/products/havit-hv-g92-gamepad.png';
import ipsMonitorImage from '@assets/images/products/ips-lcd-gaming-monitor.png';
import soccerCleatsImage from '@assets/images/products/Jr-zoom-soccer-cleats.png';
import kidsCarImage from '@assets/images/products/kids-electric-car.png';
import quiltedJacketImage from '@assets/images/products/quilted-satin-jacket.png';
import cpuCoolerImage from '@assets/images/products/rgb-liquid-cpu-cooler.png';
import sSeriesChairImage from '@assets/images/products/s-series-comfort-chair.png';
import bookSelfImage from '@assets/images/products/small-book-self.png';
import northCoatImage from '@assets/images/products/the-north-coat.png';

const products = [
    {
        id: 1,
        name: 'HAVIT HV-G92 Gamepad',
        image: havitGamepadImage,
        price: 160,
        discountedPrice: 120,
        rating: 5,
        reviewsCount: 88,
        flashSales: true,
        bestSelling: false,
    },
    {
        id: 2,
        name: 'AK-900 Wired Keyboard',
        image: ak900KeyboardImage,
        price: 1160,
        discountedPrice: 960,
        rating: 4,
        reviewsCount: 75,
        flashSales: true,
        bestSelling: false,
    },
    {
        id: 3,
        name: 'IPS LCD Gaming Monitor',
        image: ipsMonitorImage,
        price: 400,
        discountedPrice: 370,
        rating: 5,
        reviewsCount: 99,
        flashSales: true,
        bestSelling: false,
    },
    {
        id: 4,
        name: 'S-Series Comfort Chair',
        image: sSeriesChairImage,
        price: 400,
        discountedPrice: 375,
        rating: 4.5,
        reviewsCount: 74,
        flashSales: true,
        bestSelling: false,
    },

    {
        id: 5,
        name: 'The north coat',
        image: northCoatImage,
        price: 360,
        discountedPrice: 260,
        rating: 5,
        reviewsCount: 65,
        flashSales: false,
        bestSelling: true,
    },
    {
        id: 6,
        name: 'Gucci duffle bag',
        image: gucciBagImage,
        price: 1160,
        discountedPrice: 960,
        rating: 4.6,
        reviewsCount: 42,
        bestSelling: true,
    },
    {
        id: 7,
        name: 'RGB liquid CPU Cooler',
        image: cpuCoolerImage,
        price: 170,
        discountedPrice: 160,
        rating: 4.8,
        reviewsCount: 87,
        flashSales: false,
        bestSelling: true,
    },
    {
        id: 8,
        name: 'Small BookSelf',
        image: bookSelfImage,
        price: 360,
        discountedPrice: null,
        rating: 5,
        reviewsCount: 24,
        flashSales: false,
        bestSelling: true,
    },

    {
        id: 9,
        name: 'Breed Dry Dog Food',
        image: dogFoodImage,
        price: 100,
        discountedPrice: null,
        rating: 3,
        reviewsCount: 35,
        flashSales: false,
        bestSelling: false,
    },
    {
        id: 10,
        name: 'CANON EOS DSLR Camera',
        image: canonCameraImage,
        price: 360,
        discountedPrice: null,
        rating: 4,
        reviewsCount: 95,
        flashSales: false,
        bestSelling: false,
    },
    {
        id: 11,
        name: 'ASUS FHD Gaming Laptop',
        image: asusLaptopImage,
        price: 700,
        discountedPrice: null,
        rating: 5,
        reviewsCount: 325,
        flashSales: false,
        bestSelling: false,
    },
    {
        id: 12,
        name: 'Curology Product Set',
        image: curologySetImage,
        price: 500,
        discountedPrice: null,
        rating: 4,
        reviewsCount: 145,
        flashSales: false,
        bestSelling: false,
    },
    {
        id: 13,
        name: 'Kids Electric Car',
        image: kidsCarImage,
        price: 960,
        discountedPrice: null,
        rating: 5,
        reviewsCount: 65,
        flashSales: false,
        bestSelling: false,
    },
    {
        id: 14,
        name: 'Jr. Zoom Soccer Cleats',
        image: soccerCleatsImage,
        price: 1160,
        discountedPrice: null,
        rating: 5,
        reviewsCount: 35,
        flashSales: false,
        bestSelling: false,
    },
    {
        id: 15,
        name: 'GP11 Shooter USB Gamepad',
        image: gp11GamepadImage,
        price: 660,
        discountedPrice: null,
        rating: 4.5,
        reviewsCount: 55,
        flashSales: false,
        bestSelling: false,
    },
    {
        id: 16,
        name: 'Jr. Zoom Soccer Cleats',
        image: quiltedJacketImage,
        price: 660,
        discountedPrice: null,
        rating: 5,
        reviewsCount: 14,
        flashSales: false,
        bestSelling: false,
    },
];

export default products;
