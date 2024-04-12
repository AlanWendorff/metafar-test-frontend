import { ComponentProps, FC } from 'react';

interface ILoaderProps extends ComponentProps<'div'> {
  active: boolean;
}

const Loader: FC<ILoaderProps> = ({ active, ...rest }) => (active ? <div {...rest}>Loading...</div> : <></>);

export default Loader;
