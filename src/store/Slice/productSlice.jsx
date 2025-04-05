import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchDataThunk = createAsyncThunk('products/fetchData', async () => {
    const res = await fetch("https://react-project222.netlify.app/products.json");
    const data = await res.json();
    console.log("in fetchData", data);
    return data;
}
);

const productsSlice = createSlice(
    {
        name: 'productSlice',
        initialState: {
            items: []
        },
        extraReducers: (builder) => {
            builder.addCase(fetchDataThunk.fulfilled, (state, action) => {
                state.items = action.payload;
            })
        }
    }
)

export default productsSlice
