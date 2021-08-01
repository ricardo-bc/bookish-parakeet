import React,{useContext} from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import FinderContext from '../../context/finder/finderContext'
const Users =()=> {
    const finderContext= useContext(FinderContext)
    const {loading,users}= finderContext
    if(loading){
        return <Spinner/>
    }
    else{
        return (
            <div style={userStyle}>
                {users.map(user => (
                        <UserItem key={user.id} user={user} />
                    ))}
                
            </div>
        )
    }  
}

const userStyle = {
    display:'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}


export default Users
