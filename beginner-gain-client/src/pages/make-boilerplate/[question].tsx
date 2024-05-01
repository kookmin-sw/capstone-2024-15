import Screen from 'src/components/screen/make-bolierplate/[question]';
import {useRouter} from "next/router";

export const getServerSideProps = async ({ query = {}, params = {} }) => {
    return {
        props: {
            query,
            params,
        },
    };
};

const Page = () => {
    const router = useRouter();
    const query = router.query.question || '1';
    return <Screen query={query}/>
};

export default Page;