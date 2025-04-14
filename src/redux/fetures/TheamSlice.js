import { createSlice } from "@reduxjs/toolkit";


const TheamSlice = createSlice({
    name: "theam",
    initialState: {
        darkMode: false,
    },
    reducers: {
        theamToggle: ((state, action) => {
            state.darkMode = !state.darkMode
        })
    }
})

export const {theamToggle} = TheamSlice.actions
export default TheamSlice.reducer