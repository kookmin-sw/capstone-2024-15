import Screen from 'src/components/screen/make-bolierplate/[question]';
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