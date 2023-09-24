export function calculateFutureDate(daysToAdd: number): string {
  const currentDate: Date = new Date();
  const resultDate: Date = new Date(currentDate);

  // Subtract one day from current date
  resultDate.setDate(currentDate.getDate() - 1);

  // Add the desired number of days
  resultDate.setDate(resultDate.getDate() + daysToAdd);

  // Format the resultDate as "MM/DD/YYYY"
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate: string = resultDate.toLocaleDateString(undefined, options);

  return formattedDate;
}