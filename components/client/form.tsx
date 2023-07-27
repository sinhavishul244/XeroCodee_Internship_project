'use client'


import React, { FormEvent, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ placeholder, btnAction }: { placeholder?: string, btnAction?: string }) => {

    const [email, setEmail] = useState("");

    const submitHandler = (e: FormEvent): void => {
        e.preventDefault();
        toast.error('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <form action="" onSubmit={submitHandler} className='form'>
                <input type="text" name="email" id="" placeholder={placeholder} value={email} onChange={(e): void => { setEmail(e.target.value) }} />
                <button type='submit'>{btnAction}</button>
            </form>
        </>
    )
}

export default Form