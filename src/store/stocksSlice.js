import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { stockApi } from '../utils/stockApi';

const initialState = {
    list: [],
    selectedDetailsList: []
};

export const fetchStocksBySymbol = createAsyncThunk('stocks/fetchItemsBySymbol', 
    async (arg='') => {
        try {
            const response = await stockApi.fetchItemsBySymbol(arg);
            return response.json()
          
        } catch (error) {
            console.error(error);
        } 
    }                 
);

export const fetchLastStockOverview = createAsyncThunk('stocks/fetchItemOverview', 
    async (arg) => {
        try {
            const response = await stockApi.fetchItemOverview(arg);
            return response.json()
        
        } catch (error) {
            console.error(error);
        } 
    }                 
);

export const fetchLastStockQuote = createAsyncThunk('stocks/fetchItemQuote', 
    async (arg) => {
        try {
            const response = await stockApi.fetchItemQuote(arg);
            return response.json()
        
        } catch (error) {
            console.error(error);
        } 
    }                 
);

export const stocksSlice = createSlice({
    name: 'stocks',
    initialState,
    reducers: {
        resetList: state => {
            state.list = []
        },
       
        pushSelectedStock: (state, action) => {
            const item = { symbol: action.payload['1. symbol'] };
            const foundItem = state.selectedDetailsList.find(listItem => listItem.symbol === item.symbol);

            if (!foundItem) {
               state.selectedDetailsList.push(item);
            } 
        },

        popSelectedStock: state => {
            state.selectedDetailsList.pop();
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchStocksBySymbol.fulfilled, (state, action) => {
            const data = action.payload;
            state.list = data.bestMatches || [];
        });

        builder.addCase(fetchStocksBySymbol.rejected, () => {
            alert('Error fetching list of stocks');
        });

        builder.addCase(fetchLastStockOverview.fulfilled, (state, action) => {
            const index = state.selectedDetailsList.length - 1;
            const item = state.selectedDetailsList[index];
            item.overview = action.payload;
        });

        builder.addCase(fetchLastStockQuote.fulfilled, (state, action) => {
            const index = state.selectedDetailsList.length - 1;
            const item = state.selectedDetailsList[index];
            item.quote = action.payload;
        });
    }
});

export const { resetList, pushSelectedStock, popSelectedStock } = stocksSlice.actions;
export default stocksSlice.reducer;

