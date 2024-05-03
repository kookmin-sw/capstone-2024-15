import Screen from 'src/components/screen/make-bolierplate/[question]';
import {useRouter} from "next/router";
import Modal from "react-modal";
import Chat from "@/components/screen/chat";

Modal.setAppElement('#__next');

const customStyles = {
    content: {
        width: '39%',
        height: '80%',
        background: 'rgba(255,255,255,0.50)',
        backdropFilter: 'blur(20px)',
        border: 0,
        borderRadius: '10px',
        padding: 0,
        marginLeft: 'auto',
        inset: '70px',
    },
    overlay: {
        backgroundColor: '0',
        background: 'rgba(0,0,0,0.40)',
    }
}

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

    const handleModalClose: () => void = () => {
        router.back();
    };

    return (
        <>
            <Modal
                style={customStyles}
                isOpen={!!router.query.chat}
                onRequestClose={handleModalClose}
            >
                <Chat handleModalClose={handleModalClose}/>
            </Modal>
            <Screen />
        </>
    );
};

export default Page;