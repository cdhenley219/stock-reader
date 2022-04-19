import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { stockApi } from '../utils/stockApi';

const initialState = {
    list: [],
    selectedDetailsList: []
};

const asyncEndpoint = endpoint => (
    async (arg='') => {
        try {
            const response =  await endpoint(arg);
            return response.json();
          
        } catch (error) {
            console.error(error);
        }
    }
);

export const fetchStocksBySymbol = createAsyncThunk('stocks/fetchItemsBySymbol', asyncEndpoint(stockApi.fetchItemsBySymbol));
export const fetchLastStockOverview = createAsyncThunk('stocks/fetchItemOverview', asyncEndpoint(stockApi.fetchItemOverview));
export const fetchLastStockQuote = createAsyncThunk('stocks/fetchItemQuote', asyncEndpoint(stockApi.fetchItemQuote));


export const stocksSlice = createSlice({
    name: 'stocks',
    initialState,
    reducers: {
        resetList: state => {
            state.list = []
        },
       
        pushSelectedStock: (state, action) => {
            const item = { symbol: action.payload['1. symbol'], name: action.payload['2. name']};
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
            item.overview = action.payload || {};
            console.log(current(state))
        });

        builder.addCase(fetchLastStockQuote.fulfilled, (state, action) => {
            const index = state.selectedDetailsList.length - 1;
            const item = state.selectedDetailsList[index];
            item.quote = action.payload["Global Quote"] || {};
            console.log(current(state))
        });
    }
});

export const { resetList, pushSelectedStock, popSelectedStock } = stocksSlice.actions;
export default stocksSlice.reducer;

