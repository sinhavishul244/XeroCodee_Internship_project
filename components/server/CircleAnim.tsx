import React from 'react'
import Image from 'next/image'
import Circle from '../../public/circle.svg'

const CircleAnim = () => {
    return (
        <div className='circleAnim'>
            <Image src={Circle} alt='circle outline' />
        </div>
    )
}

export default CircleAnim