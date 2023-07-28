import User from '@/components/server/User'
import React from 'react'
import "../../styles/admin.scss"


async function getData() {
    const res = await fetch(`${process.env.API_URI}/api/user/all`, { method: "GET" })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json();
    return data;
}




const page = async () => {
    const data = await getData();
    const user = data.user;

    return (
        <main className='mainContainer'>
            <div className="users">
                <h2>Waitlist users</h2>
                <div className="usercontainer">
                    {user.map((item: any) => <User email={item.email} key={item.id} />)}
                </div>
            </div>
        </main>
    )
}

export default page