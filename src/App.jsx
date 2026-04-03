import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  // ✅ Fixed swap logic
  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);

    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  // ✅ Safe conversion
  const convert = () => {
    if (currencyInfo[to] && amount) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <>
      <div
        className="w-full min-h-screen flex flex-col bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/33203990/pexels-photo-33203990.jpeg')",
        }}
      >
        {/* MAIN CONTENT */}
        <div className="flex-grow flex justify-center items-center">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              {/* FROM */}
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(value) => setAmount(Number(value))}
                />
              </div>

              {/* SWAP */}
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>

              {/* TO */}
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert
              </button>
            </form>
          </div>
        </div>

        {/* FOOTER (NOW INSIDE BACKGROUND) */}
        <footer className="text-center text-black text-sm py-6">
          <div className="space-y-1">
            <p>&copy; 2026 Currency Converter. All Rights Reserved.</p>

            <p>
              Designed & Developed by:
              <br />
              <a
                href="https://github.com/sutanjoyb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-500 inline-flex items-center gap-1"
              >
                <i className="fa-brands fa-github"></i>
                Sutanjoy Bhattacharjee
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
