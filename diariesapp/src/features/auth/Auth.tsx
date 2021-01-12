import React, { FC, useState } from 'react';
import http from '../../services/api';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { User } from '../../interfaces/user.interface';
import * as Yup from 'yup';
import { AuthResponse } from '../../services/mirage/routes/user';
import { saveToken, setAuthState } from './authSlice';
import { setUser } from './userSlice';
import { useAppDispatch } from '../../store';

const initialValues: User = {
    username: '',
    email: '',
    password: '',
    diaryIds: null,
}

const Auth: FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                username: Yup.string()
                    .required('What? No username?')
                    .max(16, 'Username cannot be longer than 16 characters'),
                password: Yup.string()
                    .required('Without a password, "None shall pass!"'),
                email: Yup.string()
                    .email("Invalid Email address")
                    .required('Email is required'),
            })}
            onSubmit={(values: User) => {
                const path = isLogin ? '/auth/login' : '/auth/signup';
                http
                    .post<User, AuthResponse>(path, values)
                    .then((res) => {
                        if (res) {
                            const { user, token } = res;
                            dispatch(saveToken(token));
                            dispatch(setUser(user));
                            dispatch(setAuthState(true));
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }}
        >
            <Form>
                <label htmlFor="username">username</label>
                <Field name="username" type="text" />
                <ErrorMessage name="username" />
                <br />
                {!isLogin && (
                    <div>
                        <label htmlFor="email">email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" />
                        <br />
                    </div>
                )}
                <label htmlFor="password">password</label>
                <Field name="password" type="password" />
                <ErrorMessage name="password" />
                <br />
                <button type="submit">{isLogin ? 'Login' : 'Create account'}</button>
                <br />
                <p
                    onClick={() => setIsLogin(!isLogin)}
                    style={{ cursor: 'pointer', opacity: 0.7 }}
                >
                    {isLogin ? 'No account? Create one' : 'Already have an account?'}
                </p>
            </Form>
        </Formik>
    )
}

export default Auth;