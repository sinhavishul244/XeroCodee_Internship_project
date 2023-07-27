'use client'


import React, { FormEvent, useState } from 'react'

const Form = ({ placeholder, btnAction }: { placeholder?: string, btnAction?: string }) => {

    const [email, setEmail] = useState("");
    console.log(email);

    const submitHandler = (e: FormEvent): void => {
        e.preventDefault();
    }

    return (
        <>
            <form action="" onSubmit={submitHandler} className='form'>
                <input type="text" name="email" id="" placeholder={placeholder} value={email} onChange={(e): void => { setEmail(e.target.value) }} />
                <button type='submit'>{btnAction}</button>
            </form>
        </>
    )
}

export default Form