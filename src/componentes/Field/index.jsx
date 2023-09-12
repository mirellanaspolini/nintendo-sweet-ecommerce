import React from "react";
import { useField } from "formik";

const Field = (props) => {
    const [inputProps, meta] = useField(props);
    return <input {...inputProps} {...props} />;
};

export default Field;
