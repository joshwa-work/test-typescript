// import momentTz from 'moment-timezone';

// interface IGetNextBillingDateMonthlyFailed {
//   originalDueDate: string;
//   tScenario: string;
//   collectionTime: string;
// }

// const getNextBillingDateMonthlyFailed = ({
//   originalDueDate,
//   tScenario,
//   collectionTime,
// }: IGetNextBillingDateMonthlyFailed) => {
//   const getLastDayInMonth = momentTz(originalDueDate)
//     .tz('Asia/Manila')
//     .daysInMonth();
//   const getNextLastDayInMonth = momentTz(originalDueDate)
//     .tz('Asia/Manila')
//     .add(getLastDayInMonth, 'days')
//     .daysInMonth();

//   let addDay = 0;
//   let addMonthInDay = 0;
//   let minusDay = 0;

//   switch (tScenario) {
//     case 'T':
//       addDay = collectionTime === 'PM' ? 1 : 0;
//       break;
//     case 'T+1':
//       addDay = collectionTime === 'PM' ? 2 : 1;
//       break;
//     case 'T+2':
//       addDay = 7;
//       break;
//     case 'T+7':
//       addDay = 14;
//       break;
//     case 'T+14':
//       addDay = 21;
//       break;
//     case 'T+21':
//       addMonthInDay = getLastDayInMonth;
//       minusDay = 3;
//       break;
//     case 'NextT-3':
//       addMonthInDay = getLastDayInMonth;
//       break;
//     case 'NextT':
//       addMonthInDay = getLastDayInMonth;
//       addDay = collectionTime === 'PM' ? 1 : 0;
//       break;
//     case 'NextT+1':
//       addMonthInDay = getLastDayInMonth;
//       addDay = collectionTime === 'PM' ? 2 : 1;
//       break;
//     case 'NextT+2':
//       addMonthInDay = getLastDayInMonth;
//       addDay = 7;
//       break;
//     case 'NextT+7':
//       addMonthInDay = getLastDayInMonth;
//       addDay = 14;
//       break;
//     case 'NextT+14':
//       addMonthInDay = getLastDayInMonth;
//       addDay = 21;
//       break;
//     case 'NextT+21':
//       addMonthInDay = getLastDayInMonth + getNextLastDayInMonth;
//       minusDay = 3;
//       break;
//     case 'NextNextT-3':
//       addMonthInDay = getLastDayInMonth + getNextLastDayInMonth;
//       minusDay = 1;
//       break;
//     case 'NextNextT-1':
//       addMonthInDay = getLastDayInMonth + getNextLastDayInMonth;
//       break;
//     default:
//       break;
//   }

//   return momentTz(originalDueDate)
//     .tz('Asia/Manila')
//     .add(addDay, 'days')
//     .add(addMonthInDay, 'days')
//     .subtract(minusDay, 'days');
// };

// export default getNextBillingDateMonthlyFailed;
