import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: 'account',
    initialState: {
        name: 'Stephania',
        phone: '+380000000000',
        email: 'example@gmail',
        birthday: '00/00/0000',
        socials: {instagram: '@example', facebook: '@example'}
    },

})

export const accountReducer = accountSlice.reducer;