import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const API = "https://je-farms-engine-3riw.onrender.com";

const initialState = {
    success:false,
    loading:false,
    error:false,
    data:{}
}

export const createOrder = createAsyncThunk("order/create", async ({token, data},{rejectWithValue}) => {
    try{
        
    const response = await fetch(`${API}/order/create`,{
        method:'POST',
        headers : {
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify(data)
    })

    if (!response.ok) throw new Error('Network response was not ok');

    return response.json()
    }catch(err){
        return rejectWithValue(error.message)
    }

})

const orderSlice = createSlice({
    name:"order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createOrder.pending,(state) => {
            state.loading = true
            state.error = false
            state.success = false
        })
        .addCase(createOrder.fulfilled,(state,action) => {
            state.loading = false
            state.error = false
            state.success = true
            state.data = action.payload
        })
        .addCase(createOrder.rejected,(state) => {
            state.loading = false
            state.error = true
            state.success = false
        })
    }
})

export const {} = orderSlice.actions
export default orderSlice.reducer