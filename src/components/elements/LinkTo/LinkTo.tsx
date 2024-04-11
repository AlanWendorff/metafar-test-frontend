import { ComponentProps, FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './LinkTo.module.scss';

interface IGoBackProps extends ComponentProps<typeof Link> {
  to: string;
}

const LinkTo: FC<IGoBackProps> = ({ to, children, ...rest }) => (
  <Link to={to} className={`${styles.container} ${rest.className}`} {...rest}>
    {children}
  </Link>
);

export default LinkTo;
