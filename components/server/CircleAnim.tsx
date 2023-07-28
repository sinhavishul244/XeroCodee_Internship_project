'use client';

import React, { useEffect } from 'react'
import Image from 'next/image'
import Circle from '../../public/circle.svg'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const CircleAnim = () => {

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to('.circleImg', {
            rotate: '-180deg',
            duration: 1
        }).to('.canim1', {
            opacity: 1,
            duration: 1
        }).to('.circleImg', {
            rotate: '-360deg',
            duration: 1
        }).to('.canim1', {
            opacity: 0,
            duration: 1,
            delay: -1
        }).to('.canim2', {
            opacity: 1,
            duration: 1
        }).to('.circleImg', {
            rotate: '-540deg',
            duration: 1
        }).to('.circleImg', {
            scale: 1.1,
            duration: 1
        }).to('.circleImg', {
            scale: 1.1,
            duration: 3
        }).to('.canim2', {
            opacity: 0,
            duration: 1
        })
    });

    return (
        <div className='circleAnim'>
            <Image src={Circle} alt='circle outline' className='circleImg' />
            <h3 className='circanimtext canim1'>Code
                Doctor👋</h3>
            <h3 className='circanimtext canim2'>What can I help
                you with?</h3>
        </div>
    )
}

export default CircleAnim