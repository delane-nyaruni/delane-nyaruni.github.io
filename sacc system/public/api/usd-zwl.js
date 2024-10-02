const axios = require('axios');

// Function to fetch USD/ZWL exchange rate
async function fetchExchangeRate() {
  try {
    const response = await axios.get(
      'https://trade.deriv.com/api/market/ticks',
      {
        params: {
          active_symbols: 'USDZWL',
          granularity: 600,
          count: 1,
        },
      }
    );

    if (response.status === 200) {
      const tickData = response.data.ticks[0];
      const timestamp = new Date(tickData.epoch * 1000);
      const exchangeRate = tickData.quote;

      console.log(`[${timestamp.toLocaleString()}] USD/ZWL: ${exchangeRate}`);
    } else {
      console.log('Failed to fetch exchange rate:', response.status);
    }
  } catch (error) {
    console.error('Error occurred while fetching exchange rate:', error.message);
  }
}

// Function to fetch exchange rate every 10 minutes
function scheduleExchangeRateFetch() {
  fetchExchangeRate(); // Initial fetch

  setInterval(() => {
    fetchExchangeRate();
  }, 10 * 60 * 1000); // Fetch every 10 minutes
}

// Start fetching exchange rate
scheduleExchangeRateFetch();