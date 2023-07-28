This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## FEATURES

### FRONTEND
- Fully responsive design, works on both mobile and deskops
- Use of sass for faster designing and greater control over stylesheet
- Images are properly optimize using 'next/Image'
- Creative animations using svg art to enhance user experience
- admin page to see the users who joined the waitlist (working on admin authentication)


### BACKEND
- There are two api endspoints
    1. /api/user/new - POST request to add a new user email
    2. /api/uesr/all - GET request to show all the users

- Data is stored in MongoDB

- Uses enviroment variables to ensure the security of data





## Deploy on Vercel
https://xerocodee-silk.vercel.app/

