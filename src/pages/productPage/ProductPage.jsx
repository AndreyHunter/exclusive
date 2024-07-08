import { useLocation } from 'react-router-dom';

import { Utils } from '@utils/';

import Container from '@components/helpers/container/Container';
import Flex from '@components/helpers/flex/Flex';
import BreadCrumbs from '@components/molecules/breadCrumbs/BreadCrumbs';
import ProductInfo from '@components/organisms/productInfo/ProductInfo';
import ProductInfoSlider from '@components/organisms/productInfoSlider/ProductInfoSlider';
import SuggestedProductsSection from '@components/organisms/sections/suggestedProductsSection/SuggestedProductsSection';

import styles from './productPage.module.scss';

const product = {
    id: 1,
    name: 'Sony DualSense White',
    image: 'https://s3-alpha-sig.figma.com/img/faa8/0b60/9e3950aed9181acb44510f859f50d850?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ec7FQ77RW8x1~yK4T5C-36MjTjWhYcBASCu5qKnpEnoc~uUrbF4wozPBDB62VcPcuqi~kNxrmJAU2yBRkNdo-H5~BAhF7scxICs2VZXJD69sgdDPfLhZr5jWJDofI1JKWb8NN9FYC7JiB1SVHZxwuk3Pdydj-tisWpeoWnFpU-ncu2lzJLMUo9z5LiKLN3F0OQx0RruhJta-Wm0X2cmfCr7QRSD7mt039ZFMX6zk6nVpdETbNSPCEkJxnsnsU6HAwJht0VW8yXg103--qDjVcwHfuRpdILY5VklE8I2d9hRlpkUMgmaCNG0ILayBHGhRz8gv1CJLzPH1DuDu89k-4A__',
    images: [
        'https://s3-alpha-sig.figma.com/img/1490/1cca/de638588f27b571d7565fbaacfe57243?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kpjBI4smuxoxoS6zCt7tk2NvcCHe390g4YUiV7rWe7VImJdrLdq3q9ZYShKq2YAdhjhliTaENdMXk4BrGUMCXwzlxI9X-k9gT-sIaqvmL8O-OAShVMlYP8zJX6MnMNNLCPSIuB2GGtR3fSJXVlOsTG5XlQaRwAFehaCY~64R4nfTBC~b2z5rhJ5g9HMlrVHeOHn5XZIPMNAcNjgz1SDA6E9t2tRgHwGw2YVZcE3S~qsO~r4UO4~ETaaXEsU5828IUf4yinkiXVbYlNmEsBWfMVNPbYuWV09I8NTeFV-UANcBjiL0hS02FmTQKM88~z3xWHsjHIygwlTOh7Q4cIhMOw__',
        'https://s3-alpha-sig.figma.com/img/ca92/325b/4d31381f7fe4841786f4511bd4849d87?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aQ~FUkUQgAHajoEdof8J7ooO0z1kR3fFJTgRXZfs1Io0XhMUZ2nQFAp0HipaDYzAcDzgI7CNijm-YGPmFSnZdugGkiP0zSOvxLRumjRYIT1dVQMt3oFXDUKqJuHruYTshI6ufy7NXHVwxmW4bCXeGyoR6y0fLh2884D~4go-NAha4llh1DEbc9B6uiV8B3j2Cw6P29Ns2o9ROqyo-OB5-shLC1PWHbOIHSuVNz4wUMENc1oormO5GiYC8LYxqGoh8TLZnDEKio7ruka2Sv5a4YDl6gBLPdRtBV5uWUwI3Ss~8uOfTzczlMmUzLI7hTcP0-hGS2khIGnCESTepcmXww__',
        'https://s3-alpha-sig.figma.com/img/bdcf/fcaa/9b23a76cbe02748d2090a0b9a11cf0a5?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mb8FEYJy39j6JSXdQ3da7cjoICDJnQ5yqpEWVLV0Sw90Mhx7MRtcV4MTztB36gohh1PS8JQdIvNmhAVBPwqMjBLx-Uap-8xPezmrBfuVqCwlG7xlikPQ5i6WZ2z3qFz1rEZjF47OtzGBKN7K5I2o40s2F13UENykOHkl3OUfb265XYQhXOcKMWAxcp14681JCs9Mps~e7~NNNCh2EfW0Tw5O8OoKuf67aHUcK2X4P31wb3Rdge2GKICE3QOUjxFVH2ghpHtk-mtrbMHpF8f0cj7FZuF7YVbPg-D~FPdUruxR-4ofCfy0DI6ofbXqB8iTDQLruG-2Pvs9zJxg-aLzPw__',
        'https://s3-alpha-sig.figma.com/img/f109/e9ce/a445f7c73ec2a2153e0e149e85ee9d28?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kLWzCiNw-w2fi-TcCJP2~2e4KAhd8fgik1nIQDhh7nOFABV9E-iQqQNRiy6vZF8~9fXUmxk-teV61dVciLEbYHhlbTW286QXTowlYviT1XFb2pVAvcARgzWZjPFddfV2JRBN0EHv~HaotFtEv2~vKo8-hHYPaKLgxUcnBuNywFI9dy4KflO3-yJSN9Ib1B7~mHIe~TbJtf1FhYGcjzqXblw5DBwj-5mQNPKLnnXzSZKwORt6idzpAP9iZvVLx60-Oj0QjvXw04QvAV~nhKDPYyGnupvhgnC4rgYWrCYpSBA~ZyA11BzMJVAAq1aT8gixTWMq7pZfQkRU1JdtJ-IfiQ__',
    ],
    price: 160,
    discountedPrice: 120,
    rating: 5,
    reviewsCount: 88,
    flashSales: true,
    bestSelling: false,
    colors: [
        { name: 'ocean', color: '#A0BCE0' },
        { name: 'light-coral', color: '#E07575' },
    ],
    sizes: ['xl', 'l', 'm', 'xs'],
};

const ProductPage = () => {
    const location = useLocation();
    const breakCrumbs = Utils.generateBreadcrumbs(location.pathname);

    return (
        <>
            <Container>
                <BreadCrumbs elements={breakCrumbs} />
            </Container>
            <section className={`${styles.section} ${styles.padding}`}>
                <Container>
                    <Flex className={styles.flex}>
                        <ProductInfoSlider images={product.images} className={styles.slider} />
                        <ProductInfo product={product} />
                    </Flex>
                </Container>
            </section>
            <SuggestedProductsSection sectionTitle="Related Item" className={styles.section} />
        </>
    );
};

export default ProductPage;