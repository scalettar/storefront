import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInContainer } from './signinpage.styles'

const SigninPage = () => (
    <SignInContainer>
        <SignIn />
        <SignUp />
    </SignInContainer>
)

export default SigninPage;