import { FunctionComponent, ReactNode } from 'react';
import AccountProvider from '../provider/AccountProvider';

export type PageWrapperProps = {
  children: ReactNode;
};

const PageWrapper: FunctionComponent<PageWrapperProps> = ({ children }) => {
  return <AccountProvider>{children}</AccountProvider>;
};

export default PageWrapper;
