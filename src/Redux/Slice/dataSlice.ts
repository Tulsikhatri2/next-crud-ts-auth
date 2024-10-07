'use client';

import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    userData : string[];
    editUser : {
        userInfo: any,
        isEdit: boolean
    };
    googleUser: string[];
}

const initialState : InitialState = {
    userData:[],
    editUser:{
        userInfo:{},
        isEdit:false
    },
    googleUser:[]
}

const dataSlice = createSlice({
    name:"data",
    initialState,
    reducers:{
        addUsers: (state, action) => {
            return {
              ...state,
              userData: [...state.userData, action.payload],
            };
          },
          deleteUser: (state, action) => {
            const id = action.payload;
            const data = [...state.userData];
            data.splice(id, 1);
            return {
              ...state,
              userData: data,
            };
          },
          updateUser: (state,action) => {
            return {
              ...state,
              editUser: {
                userInfo: action.payload,
                isEdit: true,
              },
            };
          },
          editUserData: (state, action) => {
            const { id, data } = action.payload;
            const info = [...state.userData];
            info.splice(id, 1, data);
            return {
              ...state,
              userData: info,
              editUser: {
                userInfo: {},
                isEdit: false,
              },
            };
          },
          googleLoginData:(state,action)=>{
            console.log(action.payload,"from slice")
            return{
              ...state,
              googleUser:action.payload
            }
          }
    }
})

export const {addUsers, updateUser, deleteUser, editUserData, googleLoginData} = dataSlice.actions

export default dataSlice.reducer