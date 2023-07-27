import Image from 'next/image'
import React from 'react'
import Stack from '../../public/Stack.svg'
import Stack2 from '../../public/Stack2.svg'

const FeaturesMenu = ({ f1, f2, classN }: { f1?: string, f2?: string, classN?: string }) => {
    return (
        <div className={`features_menu ${classN}`}>
            <div className='item'>
                <Image src={Stack} alt={"stack image"} />
                <p> {f1}</p>
            </div>
            <div className="line"></div>
            <div className='item'>
                <Image src={Stack2} alt={"stack image"} />
                <p> {f2}</p>
            </div>
        </div>
    )
}

export default FeaturesMenu