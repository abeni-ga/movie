import { useQuery } from "@apollo/client";
import {GET_USERS} from '../../queries/getUsers.js';

const UserList = ()=>{
    const { loading, error, data } = useQuery(GET_USERS);
    if(loading) return <p>Loading...</p>
    if(error) return <p>${error.message}</p>
    return(
        <div>
        {data.getUsers.map((user)=>(
            <div key={user._id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        ))
}
        </div>
    );
}

export default UserList