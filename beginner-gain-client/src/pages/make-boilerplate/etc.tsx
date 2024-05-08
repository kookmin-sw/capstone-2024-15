import Screen from '@/components/screen/make-bolierplate/etc';
import Chat from "@/components/screen/chat";

export const getServerSideProps = async ({ query = {}, params = {} }) => {
  return {
    props: {
      query,
      params,
    },
  };
};

const Page = () => {

  return (
      <>
        <Chat/>
        <Screen />
      </>
  );
};

export default Page;