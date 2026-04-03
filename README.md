# Currency Converter App

A simple and responsive **Currency Converter** built using **React.js**, featuring real-time exchange rates, reusable components, and a clean UI.

---

## Features

-  Convert between multiple currencies
-  Real-time exchange rates using an external API
-  Swap currencies instantly
-  Built with reusable React components
-  Custom React Hook for API handling
-  Styled with Tailwind CSS

---

##  Tech Stack

- **React.js**
- **Custom Hooks**
- **Tailwind CSS**
- **Fetch API**

---

##  How It Works

### 1. Custom Hook (`useCurrencyInfo`)
- Fetches currency data from API
- Updates data when base currency changes
- Returns exchange rates object

### 2. InputBox Component
- Reusable input + dropdown UI
- Controlled via props
- Handles amount and currency selection

### 3. App Component
- Manages all state:
  - `amount`
  - `from`
  - `to`
  - `convertedAmount`
- Handles:
  - Conversion logic
  - Currency swapping
  - Form submission

---

## 4. Conversion Logic

`convertedAmount = amount × exchange_rate`

---

## 5. UI Preview

- Clean card layout
- Two input sections:
  - From
  - To
- Swap button in between
- Convert button at bottom

---

## 6. Installation & Setup

```bash
# Clone the repository
git clone https://github.com/sutanjoyb/Currency_Converter.git

# Navigate into project
cd Currency_Converter

# Install dependencies
npm install

# Start development server
npm run dev

```

---

## 7. API Used
- Currency data fetched from:
```https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api```