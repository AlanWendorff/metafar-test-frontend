import { ComponentProps, FC } from 'react';
import styles from './Detail.module.scss';

interface IDetailProps extends ComponentProps<'p'> {}

const Detail: FC<IDetailProps> = ({ children, ...rest }) => (
  <p className={styles.container} {...rest}>
    {children}
  </p>
);

export default Detail;
