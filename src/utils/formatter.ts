export class Formatter {
  static formatNumber(amount: number, locale = "en-US", currency = "USD") {
    const numberFormatter = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    });

    return numberFormatter.format(amount);
  }


}
