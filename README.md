# Currency Converter API Dashboard

A simple and responsive web application for converting currency amounts using real-time exchange rates from a live API. Built with HTML, Bootstrap 5, and vanilla JavaScript.

## Features
- **Real-Time Conversion:** Fetches up-to-date exchange rates from ExchangeRate-API.
- **Simple Interface:** Clean, intuitive design for easy use.
- **Error Handling:** Clear feedback for invalid inputs or network errors.
- **Responsive Design:** Adapts to all screen sizes, from mobile to desktop.
- **Loading States:** Displays a "Converting..." message while fetching data.

## Getting Started

### 1. Get a Free API Key
- Sign up for a free API key at [ExchangeRate-API.com](https://www.exchangerate-api.com/).

### 2. Add Your API Key
- Open the `currencyExchange.js` file in the `scripts` folder.
- Find the line:
  ```js
  const api_key = 'YOUR_API_KEY';
  ```
  Replace `'YOUR_API_KEY'` with the key you received.

### 3. Usage
- Enter the 3-letter currency code to convert from (e.g., USD).
- Enter the 3-letter currency code to convert to (e.g., EUR).
- Enter the amount you wish to convert.
- Click the **Convert** button. The result will appear below.

## Project Structure
```
pages/
  index.html
scripts/
  currencyExchange.js
styles/
  (optional custom styles)
```

## License
This project is open source and free to use.
