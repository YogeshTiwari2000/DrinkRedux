import { configureStore } from '@reduxjs/toolkit';
import drinksReducer from './features/drinkSlices';


const store = configureStore({
    reducer: {
        drinks: drinksReducer,
    },
});

export default store;
