import { createContext, useCallback, useContext, useState } from 'react';

export const AlertContext = createContext({
    status: 'success',
    message: null,
    isVisible: false,
    showSuccess: () => null,
    showError: () => null
});

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({children}) => {
    const [status, setStatus] = useState('success');
    const [message, setMessage] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const show = useCallback((showStatus, newMessage, options) => {
        const {delayMs = 0, persist, onClose, durationMs = 5000} = options || {};

        setTimeout(() => {
            setStatus(showStatus);
            setMessage(newMessage);
            setIsVisible(true);

            if(!persist)  {
                setTimeout(() => {
                    setIsVisible(false);

                    if(onClose) {
                        onClose();
                    }
                }, durationMs);
            }
        }, delayMs);
    }, [setStatus, setMessage, setIsVisible]);

    const showError = useCallback((newMessage, options) => {
        show('error', newMessage, options);
    }, [show]);
    
    const showSuccess = useCallback((newMessage, options) => {
        show('success', newMessage, options);
    }, [show]);

    return (
        <AlertContext.Provider value={{status, message, isVisible, showError, showSuccess}}>
            {children}
        </AlertContext.Provider>
    )
};