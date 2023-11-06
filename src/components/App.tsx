import { useState } from "react";
import logo from "../assets/react.svg";
import "./App.css";
import { Formatter } from '../utils/formatter'

function App() {
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0]);
  const [invoiceNumber, setInvoiceNumber] = useState("INV12345");

  const [totalTaxableAmount, setTotalTaxableAmount] = useState(500);

  function getTaxableAmountVat() {
    return totalTaxableAmount * 0.22;
  }

  function getTotalInvoice() {
    return totalTaxableAmount + getTaxableAmountVat();
  }

  function getWithholdingTax() {
    return totalTaxableAmount * 0.2;
  }

  function getTotalDebt() {
    return getTotalInvoice() - getWithholdingTax();
  }

  return (
    <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-xl mx-auto mt-8">
      <h1 className="font-bold text-2xl my-4 text-center text-blue-600">
        <img src={logo} className="h-10 inline-block" alt="Invoice Helper" />
        Invoice Helper
      </h1>
      <hr className="mb-2" />
      <div className="flex justify-between mb-6">
        <h1 className="text-lg font-bold">Invoice</h1>
        <div className="text-gray-700">
          <div>
            Date:
            <input
              type="date"
              value={invoiceDate}
              onChange={(event) => setInvoiceDate(event.target.value)}
            ></input>
          </div>
          <div>
            Invoice #:{" "}
            <input
              type="text"
              value={invoiceNumber}
              onChange={(event) => setInvoiceNumber(event.target.value)}
            ></input>
          </div>
        </div>
      </div>
      {/* <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">Bill To:</h2>
        <div className="text-gray-700 mb-2">John Doe</div>
        <div className="text-gray-700 mb-2">123 Main St.</div>
        <div className="text-gray-700 mb-2">Anytown, USA 12345</div>
        <div className="text-gray-700">johndoe@example.com</div>
      </div> */}
      <table className="w-full mb-8">
        <thead>
          <tr>
            <th className="text-left font-bold text-gray-700">Description</th>
            <th className="text-right font-bold text-gray-700">Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left text-gray-700">Total taxable amount</td>
            <td className="text-right text-gray-700">
              <input
                type="number"
                className="text-right"
                value={totalTaxableAmount}
                onChange={(event) => setTotalTaxableAmount(+event.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td className="text-left text-gray-700">VAT taxable amount</td>
            <td className="text-right text-gray-700">
              {Formatter.formatNumber(getTaxableAmountVat())}
            </td>
          </tr>
          <tr>
            <td className="text-left text-gray-700">Total invoice</td>
            <td className="text-right text-gray-700">
              {Formatter.formatNumber(getTotalInvoice())}
            </td>
          </tr>
          <tr>
            <td className="text-left text-gray-700">Withdrawal tax on taxable amount</td>
            <td className="text-right text-gray-700">
              {getWithholdingTax().toFixed(2)}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="text-left font-bold text-gray-700">Total debt</td>
            <td className="text-right font-bold text-gray-700">{Formatter.formatNumber(getTotalDebt())}</td>
          </tr>
        </tfoot>
      </table>
      <div className="text-gray-700 mb-2">Thank you for your business!</div>
      <div className="text-gray-700 text-sm">
        Please remit payment within 30 days.
      </div>
    </div>
  );
}

export default App;
