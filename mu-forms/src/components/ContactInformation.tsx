import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRigthIcon from '@material-ui/icons/KeyboardArrowRight';

// Types Defination
type Props = {
    submit: any;
};

interface FormValues {
    email: String;
    country: String;
    province: String;
    city: String;
    address: String;
}

const initialValues: FormValues = {
    email:'',
    country:'',
    province:'',
    city:'',
    address:'',
}

export const ContactInformation : React.FC<Props> = ({ submit}) => {
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Invalid Email address")
                        .required('Email is required'),
                    country: Yup.string()
                        .min(2, 'Must be 2 characters or more')
                        .max(56, 'Must be 56 characters or less')
                        .required('Country is required'),
                    province: Yup.string()
                        .min(1, 'Must be 1 characters or more')
                        .max(20, 'Must be 20 characters or less')
                        .required('Province / State is required'),
                    city: Yup.string()
                        .min(1, 'Must be 1 characters or more')
                        .max(20, 'Must be 20 characters or less')
                        .required('City is required'),
                    address: Yup.string()
                        .min(5, 'Must be 5 characters or more')
                        .max(100, 'Must be 100 characters or less')
                        .required('Address is required')
                })}
                onSubmit={(values) => {
                    submit(2)
                }}
            >
                {({ dirty, isValid }) => {
                    return (
                        < Form className="formControl">
                            <div className="fieldsDiv">
                                <Field
                                    as={TextField}
                                    variant="outlined"
                                    className="fields"
                                    required
                                    name="email"
                                    label="Eamil"
                                    helperText={<ErrorMessage name="email">{msg => <div className="error">{msg}</div>}</ErrorMessage>}
                                />
                            </div>
                            <div className="fieldsDiv">
                                <Field
                                    as={TextField}
                                    variant="outlined"
                                    className="fields"
                                    required
                                    name="country"
                                    label="Country"
                                    helperText={<ErrorMessage name="country">{msg => <div className="error">{msg}</div>}</ErrorMessage>}
                                />
                            </div>
                            <div className="fieldsDiv">
                                <Field
                                    as={TextField}
                                    variant="outlined"
                                    className="fields"
                                    required
                                    name="province"
                                    label="Province/State"
                                    helperText={<ErrorMessage name="province">{msg => <div className="error">{msg}</div>}</ErrorMessage>}
                                />
                            </div>
                            <div className="fieldsDiv">
                                <Field
                                    as={TextField}
                                    variant="outlined"
                                    className="fields"
                                    required
                                    name="city"
                                    label="City"
                                    helperText={<ErrorMessage name="city">{msg => <div className="error">{msg}</div>}</ErrorMessage>}
                                />
                            </div>
                            <div className="fieldsDiv">
                                <Field
                                    as={TextField}
                                    variant="outlined"
                                    className="fields"
                                    required
                                    name="address"
                                    label="Address"
                                    helperText={<ErrorMessage name="address">{msg => <div className="error">{msg}</div>}</ErrorMessage>}
                                />
                            </div>
                            <div className="btnDiv">
                                <Button
                                    variant="contained"
                                    className="buttonP"
                                    onClick={()=>{submit(0)}}
                                    disabled={!dirty || !isValid}
                                    startIcon={<KeyboardArrowLeftIcon />}
                                >
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    className="buttonP"
                                    type="submit"
                                    disabled={!dirty || !isValid}
                                    endIcon={<KeyboardArrowRigthIcon />}
                                >
                                    Preview
                                </Button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div >
    )
}
