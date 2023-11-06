import React from 'react';

interface Props {
  // Define any props you want to pass to the component
  locale: string;
  currency: string;
  setLocale: (locale: string) => void;
  setCurrency: (currency: string) => void;
}

const Settings: React.FC<Props> = ({locale, currency, setLocale, setCurrency}) => {
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
        </div>
      </div>
  );
};

export default Settings;
