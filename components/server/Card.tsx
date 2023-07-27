import React from 'react'
import Image from 'next/image'

const Card = ({ heading, subheading, buttontext, imgSrc, classN }: { heading: string, subheading: string, buttontext?: string, imgSrc: any, classN?: string }) => {
    return (
        <div className={`card ${classN}`}>
            <div className="texts">
                <h2>{heading}</h2>
                <p>{subheading}</p>
            </div>
            {buttontext ? (<button>{buttontext}</button>) : (<></>)}
            <Image src={imgSrc} alt='image' />
        </div>
    )
}

export default Card