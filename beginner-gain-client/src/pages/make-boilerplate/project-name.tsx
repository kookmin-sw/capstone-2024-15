import Screen from '@/components/screen/make-bolierplate/project-name';

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