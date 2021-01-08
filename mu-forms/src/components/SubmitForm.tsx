import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRigthIcon from '@material-ui/icons/KeyboardArrowRight';

interface FormValues {
    name: String;
    fName: String;
    gender: String;
    email: String;
    country: String;
    province: String;
    city: String;
    address: String;
}

const initialValues: FormValues = {
    name: 'Hassan Ali Khan',
    fName: 'Zaheer Ahmad Khan',
    gender: 'Male',
    email: 'h.a.khan1992@gmail.com',
    country: 'Pakistan',
    province: 'Punjab',
    city: 'Lahore',
    address: 'Shershah Colony Raiwind Road',
}

export const SubmitForm = () => {
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                }}
            >
                < Form className="formControl">
                    <div className="fieldsDiv">
                        <Field label="Full Name" value={initialValues.name} as={TextField} variant="outlined" className="fields" disabled/>
                    </div>
                    <div className="fieldsDiv">
                        <Field label="Father Name" value={initialValues.fName} as={TextField} variant="outlined" className="fields" disabled/>
                    </div>
                    <div className="fieldsDiv">
                        <Field label="Gender" value={initialValues.gender} as={TextField} variant="outlined" className="fields" disabled/>
                    </div>
                    <div className="fieldsDiv">
                        <Field label="Email" value={initialValues.email} as={TextField} variant="outlined" className="fields" disabled/>
                    </div>
                    <div className="fieldsDiv">
                        <Field label="Address" as={TextField} variant="outlined" className="fields" disabled
                            value={initialValues.address+", "+initialValues.city+", "+initialValues.province+", "+initialValues.country}
                        />
                    </div>

                    <div className="btnDiv">
                        <Button
                            variant="contained"
                            className="buttonP"
                            type="submit"
                            startIcon={<KeyboardArrowLeftIcon />}
                        >
                            Edit
                                </Button>
                        <Button
                            variant="contained"
                            className="buttonP"
                            type="submit"
                            endIcon={<KeyboardArrowRigthIcon />}
                        >
                            Submit
                                </Button>
                    </div>
                </Form>
            </Formik>
        </div >
    )
}
