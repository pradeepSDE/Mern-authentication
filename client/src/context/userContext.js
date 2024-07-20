import axios from 'axios';
import React, { useContext , useState, useEffect  , createContext } from 'react';

export const UserContext = createContext({});

 export function UserContextProvider({ children })  {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // axios.get('/profile').then(({data}) => {
           
        //     setUser(data);
        //     setLoading(false);
        // });
        if(!user){

            axios.get('/profile').then(({data}) => {
               console.log(data)
                setUser(data);
                setLoading(false);
            });
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserContext.Provider>
    );

}