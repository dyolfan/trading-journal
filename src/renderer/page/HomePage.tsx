import AccountBar from '../components/bars/AccountBar';
import LoginForm from '../components/form/LoginForm';
import PageWrapper from './PageWrapper';

const HomePage = () => (
  <PageWrapper>
    <AccountBar />
    <LoginForm />
  </PageWrapper>
);

export default HomePage;
