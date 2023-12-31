import { useState } from 'react'
import InputData from './components/InputData'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [input, setInput] = useState()
  const [inputCurrency,setInputCurrency] = useState("inr")
  const [output, setOutput] = useState()
  const [outputCurrency,setOutputCurrency] = useState("usd")

  const currencyInfo = useCurrencyInfo(inputCurrency)
  const options = Object.keys(currencyInfo)
  // console.log(options);

  const swap = () => {
    setInput(setOutput)
    setInputCurrency(setOutputCurrency)
    setOutput(setInput)
    setOutputCurrency(setInputCurrency)
  }
  let convert = () =>{
    setOutput(input*currencyInfo[outputCurrency])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg?auto=compress&cs=tinysrgb&w=400')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputData
                            label="From"
                            amount={input}
                            onAmountChange={(input) => setInput(input)}
                            selectCurrency={inputCurrency}
                            onCurrencyChange={(inputCurrency) => setInputCurrency(inputCurrency)}
                            currencyOptions={options}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputData
                            label="To"
                            amount={output}
                            onAmountChange={(output) => setOutput(output)}
                            selectCurrency={outputCurrency}
                            onCurrencyChange={(outputCurrency) => setOutputCurrency(outputCurrency)}
                            currencyOptions={options}
                            amountDisabled
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {inputCurrency} to {outputCurrency}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
