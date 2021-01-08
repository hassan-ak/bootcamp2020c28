import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRigthIcon from '@material-ui/icons/KeyboardArrowRight';

// Types Defination
type Props = {
    submit: any;
    prevValues:any;
    setFormValues: any;
    zValues: any;
};

export const SubmitForm : React.FC<Props> = ({ submit, prevValues,setFormValues,zValues}) => {
    console.log(zValues)
    return (
        <div>
            <Formik
                initialValues={zValues}
                onSubmit={(values, {resetForm}) => {
                    submit(0)
                    window.location.reload(true);
                }}
            >
                < Form className="formControl">
                    <div className="fieldsDiv">
                        <Field label="Full Name" value={prevValues.name} as={TextField} variant="outlined" className="fields" disabled/>
                    </div>
                    <div className="fieldsDiv">
                        <Field label="Father Name" value={prevValues.fName} as={TextField} variant="outlined" className="fields" disabled/>
                    </div>
                    <div className="fieldsDiv">
                        <Field label="Gender" value={prevValues.gender} as={TextField} variant="outlined" className="fields" disabled/>
                    </div>
                    <div className="fieldsDiv">
                        <Field label="Email" value={prevValues.email} as={TextField} variant="outlined" className="fields" disabled/>
                    </div>
                    <div className="fieldsDiv">
                        <Field label="Address" as={TextField} variant="outlined" className="fields" disabled
                            value={prevValues.address+", "+prevValues.city+", "+prevValues.province+", "+prevValues.country}
                        />
                    </div>

                    <div className="btnDiv">
                        <Button
                            variant="contained"
                            className="buttonP"
                            onClick={()=>{submit(0)}}
                            startIcon={<KeyboardArrowLeftIcon />}
                        >
                            Edit
                                </Button>
                        <Button
                            variant="contained"
                            className="buttonP"
                            type="reset"
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
