import { Alert } from './Alert';
import { useAlert } from '../../context/AlertContext';

export const AlertContainer = () => {
    const {status, message, isVisible} = useAlert();

    return <Alert variant={status} message={message} isOpen={isVisible} />
};
