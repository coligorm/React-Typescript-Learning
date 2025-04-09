import React from 'react'

interface UserMessage {
    myname: string;
    message: string;
}

const Message: React.FC<UserMessage> = ({myname, message}) => {
    return (
        <p>
            {myname}: {message}
        </p>
    )
}

export default Message