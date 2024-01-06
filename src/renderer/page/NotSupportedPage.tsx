import AccountBar from '../components/bars/AccountBar';

const NotSupportedPage = () => (
  <div>
    <AccountBar />
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center bg-main-dark text-main-white w-96 h-40 text-3xl mt-10">
        Not supported :C
      </div>
    </div>
  </div>
);

export default NotSupportedPage;
