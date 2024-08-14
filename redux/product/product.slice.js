// cartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// API and token constants
const API = "https://je-farms-engine.onrender.com";
const token = localStorage.getItem("token");

// Initial state of the product
const initialState = {
  items: [], // Array to hold product items
  status: 'idle', // Status of async operations
  error: null, // Error message if any
};

// Async thunks for handling async operations
export const getProducts = createAsyncThunk('get/products', async () => {
  try {
    const response = await fetch(`${API}/product/all`);

    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
});

export const createProduct = createAsyncThunk('product/createProduct', async (cartData, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API}/product/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(cartData),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addToProduct = createAsyncThunk('product/addToProduct', async (productData, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API}/product/add-product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(productData),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const removeFromProduct = createAsyncThunk('product/removeFromProduct', async (productId, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API}/product/remove-product/${productId}`, {
      method: 'POST',
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

export const clearProduct = createAsyncThunk('product/clearProduct', async (_, { getState, rejectWithValue }) => {
  const state = getState();
  try {
    await Promise.all(
      state.product.items.map(item =>
        fetch(`${API}/product/remove-product/${item.id}`, {
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
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(createProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addToProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(addToProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(removeFromProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeFromProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(removeFromProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(clearProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(clearProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(clearProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Export actions
export const {} = productSlice.actions;

// Export reducer
export default productSlice.reducer;
