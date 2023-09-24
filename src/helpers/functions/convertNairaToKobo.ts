export function convertNairaToKobo(nairaAmount: number): number {
  // Define the conversion rate (1 Naira = 100 kobo)
  const conversionRate: number = 100;

  // Calculate the kobo equivalent
  const koboAmount: number = nairaAmount * conversionRate;

  return koboAmount;
}