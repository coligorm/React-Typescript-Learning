import React from 'react';

interface UserContextType {
    myname: string;
    message: string;
}

export const UserContext = React.createContext<UserContextType | undefined>(undefined)