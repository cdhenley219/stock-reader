import {useEffect} from 'react';

const useOnOutsideClick = (ref, callback) => {
    useEffect(() => {
        const listener = e => {
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }
            callback(e);
        };

        document.addEventListener('click', listener);

        return () => {
            document.removeEventListener('click', listener);
        };
    },[]);
};

export default useOnOutsideClick;