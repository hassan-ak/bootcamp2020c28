// Imports
// React Imports
import React from 'react';
// Formik and Yup Imports
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// Material Ui Imports
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// Store imports
import { store } from "../../store/store";
import { add } from "../../store/tasksSlice";
// Types Imports
import { TaskProps, AddTaskProps  } from "../../interfaces/App.interface";
// Styles Imports
import './addTask.css'

// Initial Values
const initialValues: TaskProps = {
    task: '',
}

const AddTask: React.FC<AddTaskProps> = ({varient}) => {
    const button = varient;
    // Page Return
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object({
                    task: Yup.string()
                        .min(3, 'Must be 3 characters or more')
                        .max(15, 'Must be 15 characters or less')
                        .required('Task is required'),
                })}
                onSubmit={(values,onSubmitProps) => {
                    const newTask = { 
                        id: Math.floor(Math.random()*10000000000),
                        content: values.task,
                        archived: false,
                        pinned: false,
                    }
                    store.dispatch(add(newTask))
                    onSubmitProps.resetForm()
                }}
            >
                < Form className="formControl1">
                    <div className="fieldsDiv1">
                        <Field
                            as={TextField}
                            variant="outlined"
                            className="fields"
                            name="task"
                            label="Add a Task"
                            helperText={<ErrorMessage name="task">{msg => <span className="error">{msg}</span>}</ErrorMessage>}
                        />
                    </div>
                    <div className="btnDivF">
                        <Button
                            style={{ color: "white" }}
                            variant="contained"
                            className={button}
                            type="submit"
                        >
                            <AddCircleOutlineIcon />
                        </Button>
                    </div>
                </Form>
            </Formik>
        </div >
    )
}

export default AddTask;