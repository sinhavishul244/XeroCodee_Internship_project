import React from 'react'
import Image from 'next/image';
import Logo from '../../public/logo.png';
import Link from 'next/link';

const navbar = (): React.JSX.Element => {
    return (
        <header className='nav'>
            <Image src={Logo} alt='logo for the website' />
            <Link href={"/"} ><div className='logoBtn'>XEROCODEE</div></Link>
        </header >
    )
}

export default navbar;