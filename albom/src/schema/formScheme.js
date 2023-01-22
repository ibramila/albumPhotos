import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    username: yup
        .string("username should be a string")
        .required("username is required"),
    email: yup.string()
        .required("email is required"),
});