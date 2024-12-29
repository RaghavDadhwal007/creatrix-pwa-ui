import dynamic from 'next/dynamic';

const SignInView = dynamic(
    () => import('@views/SignInView/SignInView'),
    { ssr: false },
);

const SignIn = () => (
    <>
        <SignInView  />
    </>
);

export default SignIn;
