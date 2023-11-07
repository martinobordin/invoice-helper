import React, { useState } from "react";
import { Formatter } from "../utils/formatter";
import { AppSettings } from "../models/AppSettings";

interface Props {
  appSettings: AppSettings;
}

const Invoice: React.FC<Props> = ({ appSettings }) => {
  const [totalTaxableAmount, setTotalTaxableAmount] = useState(500);

  function getTaxableAmountVat() {
    return totalTaxableAmount * (appSettings.vat / 100);
  }

  function getTotalInvoice() {
    return totalTaxableAmount + getTaxableAmountVat();
  }

  function getWithholdingTax() {
    return totalTaxableAmount * (appSettings.withdrawalTax / 100);
  }

  function getTotalDebt() {
    return getTotalInvoice() - getWithholdingTax();
  }

  return (
    <table className="w-full mb-8">
      <thead>
        <tr>
          <th className="text-left font-bold text-gray-700">Description</th>
          <th className="text-right font-bold text-gray-700">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-left text-gray-700">Total taxable amount</td>
          <td className="text-right text-gray-700">
            <input
              type="number"
              className="text-right"
              min="1"
              max="999999999"
              value={totalTaxableAmount}
              onChange={(event) => setTotalTaxableAmount(+event.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td className="text-left text-gray-700">VAT {appSettings.vat}% taxable amount</td>
          <td className="text-right text-gray-700">
            {Formatter.formatNumber(getTaxableAmountVat(), appSettings.locale, appSettings.currency)}
          </td>
        </tr>
        <tr>
          <td className="text-left text-gray-700">Total invoice</td>
          <td className="text-right text-gray-700">
            {Formatter.formatNumber(getTotalInvoice(), appSettings.locale, appSettings.currency)}
          </td>
        </tr>
        <tr>
          <td className="text-left text-gray-700">
            Withdrawal tax {appSettings.withdrawalTax}% on taxable amount
          </td>
          <td className="text-right text-gray-700">
            {Formatter.formatNumber(getWithholdingTax(), appSettings.locale, appSettings.currency)}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td className="text-left font-bold text-gray-700">Total debt</td>
          <td className="text-right font-bold text-gray-700">
            {Formatter.formatNumber(getTotalDebt(), appSettings.locale, appSettings.currency)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Invoice;
