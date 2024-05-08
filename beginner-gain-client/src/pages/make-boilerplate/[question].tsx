import Screen from 'src/components/screen/make-bolierplate/[question]';
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