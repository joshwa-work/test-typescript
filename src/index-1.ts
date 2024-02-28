import momentTz from 'moment-timezone';

interface SpecialTScenario {
  arithmetic?: string;
  duration?: number;
  periodType?: string;
  isGetLastDay?: boolean;
}
interface TScenarioData {
  Id: string;
  specialTScenarios: SpecialTScenario[];
}

const tScenariosData: TScenarioData[] = [
  {
    Id: 'T',
    specialTScenarios: [],
  },
  {
    Id: 'T+1',
    specialTScenarios: [
      {
        arithmetic: 'substract',
        duration: 1,
        periodType: 'day',
      },
    ],
  },
  // {
  //   Id: 'T+2',
  //   specialTScenarios: [
  //     {
  //       arithmetic: 'substract',
  //       duration: 2,
  //       periodType: 'days',
  //     },
  //   ],
  // },
  // {
  //   Id: 'T+7',
  //   specialTScenarios: [],
  // },
  // {
  //   Id: 'T+14',
  //   specialTScenarios: [
  //     {
  //       arithmetic: 'substract',
  //       duration: 7,
  //       periodType: 'days',
  //     },
  //   ],
  // },
  // {
  //   Id: 'T+21',
  //   specialTScenarios: [
  //     {
  //       arithmetic: 'substract',
  //       duration: 14,
  //       periodType: 'days',
  //     },
  //   ],
  // },
  // {
  //   Id: 'NextT-3',
  //   specialTScenarios: [],
  // },
  // {
  //   Id: 'T+31',
  //   specialTScenarios: [],
  // },
  // {
  //   Id: 'NextT',
  //   specialTScenarios: [],
  // },
  // {
  //   Id: 'NextT+1',
  //   specialTScenarios: [
  //     {
  //       arithmetic: 'substract',
  //       duration: 1,
  //       periodType: 'day',
  //     },
  //   ],
  // },
  // {
  //   Id: 'NextT+2',
  //   specialTScenarios: [
  //     {
  //       arithmetic: 'substract',
  //       duration: 2,
  //       periodType: 'day',
  //     },
  //   ],
  // },
  // {
  //   Id: 'NextNextT-1',
  //   specialTScenarios: [
  //     {
  //       arithmetic: 'add',
  //       duration: 1,
  //       periodType: 'day',
  //     },
  //     {
  //       arithmetic: 'substract',
  //       duration: 1,
  //       periodType: 'month',
  //     },
  //     {
  //       arithmetic: 'add',
  //       duration: 31,
  //       periodType: 'days',
  //     },
  //   ],
  // },
  // {
  //   Id: 'NextMonthsary+28',
  //   specialTScenarios: [
  //     {
  //       isGetLastDay: true,
  //       arithmetic: 'substract',
  //       duration: 28,
  //       periodType: 'days',
  //     },
  //   ],
  // },
  // {
  //   Id: 'NextNextMonthsary-1',
  //   specialTScenarios: [
  //     {
  //       isGetLastDay: true,
  //       arithmetic: 'substract',
  //       duration: 31,
  //       periodType: 'days',
  //     },
  //   ],
  // },
];

const currentDate = '2024-02-01';
console.log('Current Date:', currentDate);

const dueDate = momentTz(currentDate || new Date())
  .tz('Asia/Manila')
  .subtract('1', 'day');

for (const tScenarioData of tScenariosData) {
  const { Id, specialTScenarios } = tScenarioData;

  let tScenarioDueDate = momentTz(dueDate);

  if (specialTScenarios.length !== 0) {
    for (const specialTScenario of specialTScenarios) {
      const {
        arithmetic,
        duration,
        periodType,
        isGetLastDay = false,
      } = specialTScenario;
      const specialTScenarioDueDate = momentTz(tScenarioDueDate);

      if (isGetLastDay) {
        const getLastDay = specialTScenarioDueDate
          .subtract(1, 'month')
          .daysInMonth();
        specialTScenarioDueDate
          .subtract(getLastDay, 'days')
          .add(getLastDay, 'days')
          .add(31, 'days');
      }

      if (arithmetic === 'add') {
        if (periodType === 'day') {
          specialTScenarioDueDate.add(duration, 'day');
        }

        if (periodType === 'days') {
          specialTScenarioDueDate.add(duration, 'days');
        }

        if (periodType === 'month') {
          specialTScenarioDueDate.add(duration, 'month');
        }

        if (periodType === 'months') {
          specialTScenarioDueDate.add(duration, 'months');
        }
      }

      if (arithmetic === 'substract') {
        if (periodType === 'day') {
          specialTScenarioDueDate.subtract(duration, 'day');
        }

        if (periodType === 'days') {
          specialTScenarioDueDate.subtract(duration, 'days');
        }

        if (periodType === 'month') {
          specialTScenarioDueDate.subtract(duration, 'month');
        }

        if (periodType === 'months') {
          specialTScenarioDueDate.subtract(duration, 'months');
        }
      }

      tScenarioDueDate = momentTz(specialTScenarioDueDate);
    }
  }

  console.log('===== START =====');
  console.log('T Scenario:', Id);
  console.log('Original Due Date:', tScenarioDueDate.format('YYYY-MM-DD'));
  console.log('===== END =====');
}
