const HOST = 'https://www.alphavantage.co';
const API_KEY = 'KSCNZ4VYYEG2A3ZO';

const fetchItemsBySymbol = value => {
   return fetch(`${HOST}/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=${API_KEY}`);
};

const fetchItemOverview = symbol => {
   return fetch(`${HOST}/query?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`);
};

const fetchItemQuote = symbol => {
   return fetch(`${HOST}/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`);
};

export const stockApi = { fetchItemsBySymbol, fetchItemOverview, fetchItemQuote };

