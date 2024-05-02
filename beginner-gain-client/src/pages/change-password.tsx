import Screen from '../components/screen/change-password';

export const getServerSideProps = async ({ query = {}, params = {} }) => {
    return {
        props: {
            query,
            params,
        },
    };
};

export default Screen;
