import Screen from '../components/screen/my-boilerplate';

export const getServerSideProps = async ({ query = {}, params = {}, req }: any) => {
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
