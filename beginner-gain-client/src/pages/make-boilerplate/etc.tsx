import Screen from '@/components/screen/make-bolierplate/etc';
import Chat from "@/components/screen/chat";

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

const Page = () => {

  return (
      <>
        <Chat/>
        <Screen />
      </>
  );
};

export default Page;