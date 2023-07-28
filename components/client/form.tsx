'use client'


import React, { FormEvent, useEffect, useState } from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ placeholder, btnAction }: { placeholder?: string, btnAction?: string }) => {

    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);

    const emailSubmitter = async () => {

        const id = toast.loading("Please wait...", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            toastId: "customId"
        });

        const res = await fetch("/api/user/new", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        });
        const data = await res.json();

        data.success ? toast.update(id, { render: `${data.message}`, type: "success", isLoading: false }) : toast.update(id, { render: `${data.message}`, type: "error", isLoading: false })


    }


    useEffect(
        () => {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            setIsValidEmail(emailRegex.test(email));
        }, [email])


    const submitHandler = (e: FormEvent): void => {
        e.preventDefault();
        if (isValidEmail) {
            emailSubmitter();



        } else {
            toast.error('Enter proper email!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                toastId: "customId"
            });
        }
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
                transition={Slide}
            />
            <form action="" onSubmit={submitHandler} className='form'>
                <input type="text" name="email" id="" placeholder={placeholder} value={email} onChange={(e): void => { setEmail(e.target.value) }} />
                <button type='submit'>{btnAction}</button>
            </form>
        </>
    )
}

export default Form