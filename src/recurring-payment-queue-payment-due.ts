import momentTz from 'moment-timezone';

interface IRecurringPaymentQueuePaymentDue {
  currentDate: string;
  type: string;
}

const recurringPaymentQueuePaymentDue = ({
  currentDate,
  type,
}: IRecurringPaymentQueuePaymentDue) => {
  // const currentDate = '2024-03-11';
  // const type = 'NextNextT-1';

  let date = momentTz(currentDate);

  // Special handling to T+1, T+2 scenario
  const [, tNumber] = type.split('+');
  date = date.subtract(tNumber, 'days');

  // Check if type is T+14 or T+21 scenario
  const isTP7Dependent = ['T+14', 'T+21'].includes(type);
  if (isTP7Dependent) {
    date = date.add(7, 'days');
  }

  // Special handling to NextNextT-1 scenario
  const isNNTM1Dependent = ['NextNextT-1'].includes(type);
  if (isNNTM1Dependent) {
    date.add(1, 'day').subtract(1, 'month').add(31, 'days');
  }

  const isNextMonthsaries = [
    'NextMonthsary',
    'NextMonthsary+1',
    'NextMonthsary+2',
    'NextMonthsary+7',
    'NextMonthsary+14',
    'NextMonthsary+21',
    'NextMonthsary+28',
  ].includes(type);
  if (isNextMonthsaries) {
    const getLastDay = date.subtract(1, 'month').daysInMonth();
    date.subtract(getLastDay, 'days').add(getLastDay, 'days').add(31, 'days');
  }

  const isNextNextMonthsaries = ['NextNextMonthsary-1'].includes(type);
  if (isNextNextMonthsaries) {
    date = date.add(1, 'day').subtract(2, 'month').add(31, 'days');
  }

  console.log('Current Date:', currentDate);
  console.log('T+31:        ', momentTz(date).format('YYYY-MM-DD'));
};

export default recurringPaymentQueuePaymentDue;
