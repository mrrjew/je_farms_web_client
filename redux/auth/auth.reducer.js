import { createAsyncThunk } from "@reduxjs/toolkit";

const API="https://je-farms-engine.onrender.com"

export const ThisUser = createAsyncThunk('user/profile', async(token,thunkAPi) => {
    try{
        const response = await fetch(`${API}/auth/profile`,{
            headers:{
                Authorization : `Bearer ${token}`
            }
        });

          if(!response.ok){
            throw new Error('Error getting user')
          }

          return await response.json()
    }catch(error){
        return thunkAPi.rejectWithValue(`Error getting user: ${error}`) 
    }
})

export const RegisterUser = createAsyncThunk('user/register', async(data,thunkAPi) => {
    try{
        const response = await fetch(`${API}/auth/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if(!response.ok){
            throw new Error('Error creating user')
          }

          const result = await response.json();
          if(typeof window !== undefined){
            localStorage.setItem('token', result.token); 
          }
          return result;
    }catch(error){
        return thunkAPi.rejectWithValue(`Error creating user: ${error}`) 
    }
})

export const LoginUser = createAsyncThunk('user/login', async(data,thunkAPi) => {
    try{
        const response = await fetch(`${API}/auth/signin`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if(!response.ok){
            throw new Error('Error logging user in')
          }

          const result = await response.json();
          if(typeof window !== undefined){
            localStorage.setItem('token', result.token); 
          }
          return result;
    }catch(error){
        return thunkAPi.rejectWithValue(`Error logging user in: ${error}`) 
    }
})