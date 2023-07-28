import React from 'react'

const User = ({ email }: { email: string }) => {
    return (
        <div className='user_card'>{email}</div>
    )
}

export default User