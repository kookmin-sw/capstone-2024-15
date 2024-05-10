import Screen from '../components/screen/main';

export const getServerSideProps = async ({ query = {}, params = {}, req }) => {
  const isLoggedIn = !!req.cookies['accessId'];

  return {
    props: {
      query,
      params,
      isLoggedIn: isLoggedIn,
    },
  };
};

export default Screen;
