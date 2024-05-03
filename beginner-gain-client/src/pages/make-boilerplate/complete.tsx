import Screen from '@/components/screen/make-bolierplate/complete';

export const getServerSideProps = async ({ query = {}, params = {} }) => {
  return {
    props: {
      query,
      params,
    },
  };
};

export default Screen;