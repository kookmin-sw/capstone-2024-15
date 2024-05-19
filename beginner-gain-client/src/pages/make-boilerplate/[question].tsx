import Screen from 'src/components/screen/make-bolierplate/[question]';

export const getServerSideProps = async ({ query = {}, params = {}, req } : any) => {
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