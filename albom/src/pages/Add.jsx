import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { loginFormSchema } from "../schema/formScheme";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import "./style.css"
function Add() {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState({
    name: "",
    username: "",
    email: ""
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });


  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
    console.log(res.data)
  };

  useEffect(() => {
    getData();
  }, []);


  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value, [e.target.username]: e.target.value, [e.target.email]: e.target.value });

  };


  const formSubmit = (data) => {
    console.log(data);
    data.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users", state);
    getData();
    setState(
      {
        name: "",
        age: "",
        hobbies: ""
      }
    )
  };



  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="name">Name and Surname</label>
        <input {...register("name")}
          value={state.name}
          type="text"
          onChange={handleChange}
          name="name"
          id="name" />
        {errors.name ? (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        ) : (
          <></>
        )}
        <label htmlFor="username">username</label>
        <input {...register("username")}
          type="text"
          value={state.username}
          name="username"
          onChange={handleChange}
          id="username" />
        {errors.username ? (
          <span style={{ color: "red" }}>{errors.username.message}</span>
        ) : (
          <></>
        )}
        <label htmlFor="email">email</label>
        <input
          {...register("email")}
          type="email"
          name="email"
          value={state.email}
          id="email"
          onChange={handleChange}

        />
        {errors.email ? (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        ) : (
          <></>
        )}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Add