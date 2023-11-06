import { useState } from "react";
import logo from "../assets/logo.svg";
import "./App.css";
import { Formatter } from "../utils/formatter";

function App() {
  const [invoiceDate, setInvoiceDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [invoiceNumber, setInvoiceNumber] = useState("INV12345");

  const [locale, setLocale] = useState("it-IT");
  const [currency, setCurrency] = useState("EUR");

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
          <div>
            Locale:
            <select
              value={locale}
              onChange={(event) => setLocale(event.target.value)}
            >
              <option value="it-IT">it-IT</option>
              <option value="en-US">en-US</option>
            </select>
          </div>
          <div>
            Currency:
            <select
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
            >
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>
      </div>
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
              {Formatter.formatNumber(getTaxableAmountVat(), locale, currency)}
            </td>
          </tr>
          <tr>
            <td className="text-left text-gray-700">Total invoice</td>
            <td className="text-right text-gray-700">
              {Formatter.formatNumber(getTotalInvoice(), locale, currency)}
            </td>
          </tr>
          <tr>
            <td className="text-left text-gray-700">
              Withdrawal tax on taxable amount
            </td>
            <td className="text-right text-gray-700">
              {Formatter.formatNumber(getWithholdingTax(), locale, currency)}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="text-left font-bold text-gray-700">Total debt</td>
            <td className="text-right font-bold text-gray-700">
              {Formatter.formatNumber(getTotalDebt(), locale, currency)}
            </td>
          </tr>
        </tfoot>
      </table>
      <p className="text-center text-gray-500 text-xs">
        &copy;{new Date().getFullYear()} Martino Bordin. All rights reserved.
      </p>
    </div>
  );
}

export default App;
