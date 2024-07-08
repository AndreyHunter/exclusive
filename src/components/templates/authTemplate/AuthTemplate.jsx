import { Outlet } from 'react-router-dom';

import Image from '@assets/images/auth.jpg';

import styles from './authTemplate.module.scss';

const AuthTemplate = () => {
    return (
        <section className={styles.section}>
            <img src={Image} alt="" className={styles.image} />
            <div className={styles.content}>
                <Outlet />
            </div>
        </section>
    );
};

export default AuthTemplate;
