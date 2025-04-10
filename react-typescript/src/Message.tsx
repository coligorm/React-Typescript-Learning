import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Message: React.FC = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('User context must be used with UserProvider');
    }
    return (
        <p>
            {context.myname}: {context.message}
        </p>
    )
}

export default Message