const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const API = "https://je-farms-engine-3riw.onrender.com";

const initialState = {
    success:false,
    error:false,
    loading:false,
    data : {}
}

export const initializePayment = createAsyncThunk("payment/initialize", async({token,payload}, {rejectWithValue}) => {
    try{
            console.log(token,payload)
    const response = await fetch(`${API}/payment/initialize`,{
        method:'POST',
        headers : {
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    }).catch(err => console.log(err))

    return response.json()
    }catch(error){
        return rejectWithValue(error)
    }
})

const paymentSlice = createSlice({
    name:"payment",
    initialState,
    reducers : {},
    extraReducers: (builder) => {
        builder
        .addCase(initializePayment.pending,(state) => {
            state.loading = true
            state.error = false
            state.success = false
        })
        .addCase(initializePayment.fulfilled,(state,action) => {
            state.loading = false
            state.error = false
            state.success = true
            state.data = action.payload
        })
        .addCase(initializePayment.rejected,(state) => {
            state.loading = false
            state.error = true
            state.success = false
        })
    }
})

export const {} = paymentSlice.actions
export default paymentSlice.reducer