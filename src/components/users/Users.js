import React from 'react';
import UserItem from 'components/users/UserItem';
import Spinner from 'components/layout/Spinner';
import PropTypes from 'prop-types'

 const Users  = ({users, loading}) => {
        if (loading){
                return <Spinner />
        }
            return (
                <div style={userStyle}>
                    {users.map(user => (
                        <UserItem key={user.id} user={user}/>
                    ))}
                </div>
        )
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1erm'
}

export default Users