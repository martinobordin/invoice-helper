import React from "react";

interface Props {
  // Define any props you want to pass to the component
  locale: string;
  currency: string;
  vat: number;
  withdrawalTax: number;
  setLocale: (locale: string) => void;
  setCurrency: (currency: string) => void;
  setVat: (vatr: number) => void;
  setWithdrawalTax: (vatr: number) => void;
}

const Settings: React.FC<Props> = ({
  locale,
  currency,
  vat,
  withdrawalTax,
  setLocale,
  setCurrency,
  setVat,
  setWithdrawalTax
}) => {
  // Define the component's logic and rendering here
  return (
    <div className="flex justify-between mb-6">
      <div className="w-full mt-6">
        <h1 className="text-lg font-bold">Settings</h1>
        <label htmlFor="locale">Locale</label>
        <select
          id="locale"
          value={locale}
          onChange={(event) => setLocale(event.target.value)}
        >
          <option value="it-IT">it-IT</option>
          <option value="en-US">en-US</option>
        </select>
        <label htmlFor="currency">Currency</label>
        <select
          id="currency"
          value={currency}
          onChange={(event) => setCurrency(event.target.value)}
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
        <label htmlFor="vat">VAT %</label>
        <input
          type="number"
          id="vat"
          value={vat}
          min="1"
          max="100"
          onChange={(event) => setVat(+event.target.value)}
        ></input>
              <label htmlFor="withdrawalTax">Withdrawal Tax %</label>
        <input
          type="number"
          id="withdrawalTax"
          value={withdrawalTax}
          min="1"
          max="100"
          onChange={(event) => setWithdrawalTax(+event.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Settings;
