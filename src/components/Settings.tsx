import React, { Dispatch, SetStateAction } from "react";
import { AppSettings } from "../models/AppSettings";

interface Props {
  appSettings: AppSettings;
  setAppSettings: Dispatch<SetStateAction<AppSettings>>;
}

const Settings: React.FC<Props> = ({ appSettings, setAppSettings }) => {
  const setAppSettingsValue = (key: string, value: string | number) => {
    setAppSettings((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  return (
    <div className="flex justify-between">
      <div className="w-full">
        <h1 className="text-lg font-bold">Settings</h1>
        <label htmlFor="locale">Locale</label>
        <select
          id="locale"
          value={appSettings.locale}
          onChange={(event) =>
            setAppSettingsValue("locale", event.target.value)
          }
        >
          <option value="it-IT">it-IT</option>
          <option value="en-US">en-US</option>
        </select>
        <label htmlFor="currency">Currency</label>
        <select
          id="currency"
          value={appSettings.currency}
          onChange={(event) =>
            setAppSettingsValue("currency", event.target.value)
          }
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
        <label htmlFor="vat">VAT %</label>
        <input
          type="number"
          id="vat"
          value={appSettings.vat}
          min="1"
          max="100"
          onChange={(event) => setAppSettingsValue("vat", +event.target.value)}
        ></input>
        <label htmlFor="withdrawalTax">Withdrawal Tax %</label>
        <input
          type="number"
          id="withdrawalTax"
          value={appSettings.withdrawalTax}
          min="1"
          max="100"
          onChange={(event) =>
            setAppSettingsValue("withdrawalTax", +event.target.value)
          }
        ></input>
      </div>
    </div>
  );
};

export default Settings;
