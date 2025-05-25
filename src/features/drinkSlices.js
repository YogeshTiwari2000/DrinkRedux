import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDrinks = createAsyncThunk('drinks/fetchDrinks', async (searchTerm) => {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
    const data = await res.json();
    return data.drinks || []; // Ensure we always return an array
});

const drinksSlice = createSlice({
    name: 'drinks',
    initialState: {
        drinks: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDrinks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDrinks.fulfilled, (state, action) => {
                state.loading = false;
                state.drinks = action.payload;
            })
            .addCase(fetchDrinks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default drinksSlice.reducer;
