import Screen from '../components/screen/login';

export const getServerSideProps = async ({ query = {}, params = {} }) => {
  return {
    props: {
      query,
      params,
    },
  };
};

export default Screen;