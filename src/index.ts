import getNextBillingDateMonthlyFailed from './next-billing-date-monthly-failed';

const nextBillingDate = getNextBillingDateMonthlyFailed({
  originalDueDate: '2024-02-19T16:00:00Z',
  tScenario: 'NextT+1',
  collectionTime: 'PM',
});
console.log(nextBillingDate.format('YYYY-MM-DD'));
