import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWishlistThunk = createAsyncThunk('favorites/fetchWishlist', async () => {
  let response = await fetch('https://react-project222.netlify.app/wishlist');
  response = await response.json();
  console.log("fav : ", response);
  return response;

});
export const addToWishlistThunk = createAsyncThunk('favorites/addToWishlistThunk', async (product) => {
  let response = await fetch('https://react-project222.netlify.app/wishlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error('Failed to add product to wishlist');
  response = await response.json();
  console.log("alaaaaaaa", response);
  return response;
}
);

export const removeFromWishlistThunk = createAsyncThunk('favorites/removeFromWishlistThunk', async (prId) => {
  await fetch(`https://react-project222.netlify.app/wishlist/${prId}`, { method: 'DELETE' });
  return prId;
});

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: { items: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWishlistThunk.fulfilled, (state, action) => {
      state.items = action.payload;
      console.log("asasdasd : ", action.payload);
    });
    builder.addCase(addToWishlistThunk.fulfilled, (state, action) => {
      state.items = [...state.items, action.payload];
      console.log(" add state : " + state.items);
    });

    builder.addCase(removeFromWishlistThunk.fulfilled, (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    });

  },
});

export default favoriteSlice.reducer;
