import Screen from '../components/screen/reset-password';

export const getServerSideProps = async ({ query = {}, params = {} }) => {
  return {
    props: {
      query,
      params,
    },
  };
};

export default Screen;
