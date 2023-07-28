import Image from 'next/image'
import React from 'react'
import Loading from '../public/loading.png'
import "../styles/loading.scss"


const loading = () => {
    return (
        <main className='loading' >
            {/* loading */}
            <div>  <Image src={Loading} alt='loading' className='loading_img' />
                <h2>Loading</h2></div>

        </main>
    )
}

export default loading