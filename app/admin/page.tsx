import User from '@/components/server/User'
import React from 'react'
import absoluteUrl from 'next-absolute-url'






async function getData() {
    // const res = await fetch(`https://xerocodee-silk.vercel.app/api/user/all`, { method: "GET" })
    // if (!res.ok) {
    //     throw new Error('Failed to fetch data')
    // }

    // return res.json();
}




const page = async () => {
    const data = await getData();
    // console.log(data);

    return (
        <main className='mainContainer'>
            <div className="users">
                <h2>Waitlist users</h2>
                <div className="usercontainer">
                    <User email='helloworld' />
                </div>
            </div>
        </main>
    )
}

export default page