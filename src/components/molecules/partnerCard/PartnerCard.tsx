import { clsx } from 'clsx';

import type { TypePartnerCard } from 'types/static';

import styles from './partnerCard.module.scss';

interface PartnerCardProps {
  partner: TypePartnerCard;
  renderIn?: 'slider' | 'list';
}

export const PartnerCard = ({ partner, renderIn = 'list' }: PartnerCardProps) => {
  const Component = renderIn === 'slider' ? 'div' : 'li';

  return (
    <Component className={styles.slide}>
      <div className={styles.wrapper}>
        <img src={partner.image} alt={partner.name} className={styles.image} />
      </div>
      <div className={styles.info}>
        <div>
          <div className={styles.name}>{partner.name}</div>
          <p>{partner.position}</p>
        </div>
        <ul className={styles.list}>
          {partner.links &&
            partner.links.map((link, index) => {
              const classes = clsx({
                [styles.icon]: link.name !== 'instagram',
                [styles.stroke]: link.name === 'instagram',
              });
              const Icon = link.icon;
              return (
                <li key={`${index}${link.name}`} className={classes}>
                  <a href={link.path} target="_black">
                    <Icon />
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </Component>
  );
};
