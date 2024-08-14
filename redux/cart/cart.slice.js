// cartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// API and token constants
const API = "https://je-farms-engine.onrender.com";

// Initial state of the cart
const initialState = {
  id:0,
  items: [], // Array to hold cart items
  status: 'idle', // Status of async operations
  error: null, // Error message if any
};

// Async thunks for handling async operations
export const getCart = createAsyncThunk('cart/getCart', async ({token,id}, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API}/cart/${+id}`,{
      method:"GET",
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    });

    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
export const createCart = createAsyncThunk('cart/createCart', async ({token,id}, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API}/cart/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({userId:+id}),
    });

    if (!response.ok) throw new Error('Network response was not ok');

    
    const data = await response.json();
    
    if(typeof window !== undefined){
      window.localStorage.setItem("cartId",data.id)
    }

    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addToCart = createAsyncThunk('cart/addToCart', async ({token,productData}, { rejectWithValue }) => {
  try {
    console.log(token,productData)
    const response = await fetch(`${API}/cart/add-product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({...productData,cartId:+productData.cartId}),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async ({token,cartId,productId}, { rejectWithValue }) => {
  try {


    const response = await fetch(`${API}/cart/remove-product/${cartId}/${productId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`, 
      },
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return productId;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const clearCart = createAsyncThunk('cart/clearCart', async (token, { getState, rejectWithValue }) => {
  const state = getState();
  try {
    await Promise.all(
      state.cart.items.map(item =>
        fetch(`${API}/cart/remove-product/${item.id}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
      )
    );
    return [];
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Create the slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.id = action.payload.id
        state.items = action.payload.cartProducts;
      })
      .addCase(createCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.cartProducts;   
      })
      .addCase(getCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addToCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.cartProducts;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(removeFromCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items =  action.payload;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(clearCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Export actions
export const {} = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
