const recurringPaymentSchedules = [
  {
    terminationNotice: {
      notification: [],
      tScenario: null,
      collectionTime: null,
    },
    premiumReminder: {
      notification: ['Reminder Notice - SMS', 'Reminder Notice - Email'],
      tScenario: 'T-3',
      collectionTime: '9:00 AM',
    },
    Modified: '2024-02-12T06:06:24.771+08:00',
    distributorChannel: 'UNO',
    frequency: 'Monthly',
    status: 'Active',
    productCode: 'PhMheBv1',
    Id: '80bd37b7-9ad6-4c81-b60b-67317440a556',
    lapsationNotice: {
      notification: ['Lapsation Notice - SMS', 'Lapsation Notice - Email'],
      tScenario: 'Next Next T',
      collectionTime: '9:00 AM',
    },
    Created: '2024-02-12T06:01:31.328+08:00',
    debitCallSchedule: [
      {
        unsuccessful: { notification: [], status: 'Inactive' },
        isDebitCallActive: true,
        collectionTime: '10:00 AM',
        partial: { notification: [], status: 'Inactive' },
        tScenario: 'T',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
      {
        unsuccessful: { notification: [], status: 'Inactive' },
        isDebitCallActive: true,
        collectionTime: '10:00 AM',
        partial: { notification: [], status: 'Inactive' },
        tScenario: 'T+1',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
      {
        unsuccessful: {
          notification: [
            'Unsuccessful Notice - SMS',
            'Unsuccessful Notice - Email',
          ],
          status: 'Active',
        },
        isDebitCallActive: true,
        collectionTime: '10:00 AM',
        partial: { notification: [], status: 'Inactive' },
        tScenario: 'T+2',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
      {
        unsuccessful: { notification: [], status: 'Inactive' },
        isDebitCallActive: true,
        collectionTime: '10:00 AM',
        partial: {
          notification: ['Partial Notice - SMS', 'Partial Notice - Email'],
          status: 'Active',
        },
        tScenario: 'Next T',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
      {
        unsuccessful: { notification: [], status: 'Inactive' },
        isDebitCallActive: true,
        collectionTime: '10:00 AM',
        partial: {
          notification: ['Partial Notice - SMS', 'Partial Notice - Email'],
          status: 'Active',
        },
        tScenario: 'Next T+1',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
      {
        unsuccessful: {
          notification: [
            'Unsuccessful Notice - SMS',
            'Unsuccessful Notice - Email',
          ],
          status: 'Active',
        },
        isDebitCallActive: true,
        collectionTime: '10:00 AM',
        partial: {
          notification: ['Partial Notice - SMS', 'Partial Notice - Email'],
          status: 'Active',
        },
        tScenario: 'Next T+2',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
      {
        unsuccessful: { notification: [], status: 'Inactive' },
        isDebitCallActive: true,
        collectionTime: '5:00 PM',
        partial: { notification: [], status: 'Inactive' },
        tScenario: 'T',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
      {
        unsuccessful: { notification: [], status: 'Inactive' },
        isDebitCallActive: true,
        collectionTime: '5:00 PM',
        partial: { notification: [], status: 'Inactive' },
        tScenario: 'T+1',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
      {
        unsuccessful: {
          notification: [
            'Unsuccessful Notice - SMS',
            'Unsuccessful Notice - Email',
          ],
          status: 'Active',
        },
        isDebitCallActive: true,
        collectionTime: '5:00 PM',
        partial: { notification: [], status: 'Inactive' },
        tScenario: 'T+7',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
      {
        unsuccessful: {
          notification: [
            'Unsuccessful Notice - SMS',
            'Unsuccessful Notice - Email',
          ],
          status: 'Active',
        },
        isDebitCallActive: true,
        collectionTime: '5:00 PM',
        partial: { notification: [], status: 'Inactive' },
        tScenario: 'T+14',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
      {
        unsuccessful: {
          notification: [
            'Unsuccessful Notice - SMS',
            'Unsuccessful Notice - Email',
          ],
          status: 'Active',
        },
        isDebitCallActive: true,
        collectionTime: '5:00 PM',
        partial: { notification: [], status: 'Inactive' },
        tScenario: 'T+21',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
      {
        unsuccessful: {
          notification: [
            'Unsuccessful Notice - SMS',
            'Unsuccessful Notice - Email',
          ],
          status: 'Active',
        },
        isDebitCallActive: true,
        collectionTime: '5:00 PM',
        partial: { notification: [], status: 'Inactive' },
        tScenario: 'Next T-3',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
      {
        unsuccessful: { notification: [], status: 'Inactive' },
        isDebitCallActive: true,
        collectionTime: '5:00 PM',
        partial: {
          notification: ['Partial Notice - SMS', 'Partial Notice - Email'],
          status: 'Active',
        },
        tScenario: 'Next T',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
      {
        unsuccessful: { notification: [], status: 'Inactive' },
        isDebitCallActive: true,
        collectionTime: '5:00 PM',
        partial: {
          notification: ['Partial Notice - SMS', 'Partial Notice - Email'],
          status: 'Active',
        },
        tScenario: 'Next T+1',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
      {
        unsuccessful: {
          notification: [
            'Unsuccessful Notice - SMS',
            'Unsuccessful Notice - Email',
          ],
          status: 'Active',
        },
        isDebitCallActive: true,
        collectionTime: '5:00 PM',
        partial: {
          notification: ['Partial Notice - SMS', 'Partial Notice - Email'],
          status: 'Active',
        },
        tScenario: 'Next T+7',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
      {
        unsuccessful: {
          notification: [
            'Unsuccessful Notice - SMS',
            'Unsuccessful Notice - Email',
          ],
          status: 'Active',
        },
        isDebitCallActive: true,
        collectionTime: '5:00 PM',
        partial: {
          notification: ['Partial Notice - SMS', 'Partial Notice - Email'],
          status: 'Active',
        },
        tScenario: 'Next T+14',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
      {
        unsuccessful: {
          notification: [
            'Unsuccessful Notice - SMS',
            'Unsuccessful Notice - Email',
          ],
          status: 'Active',
        },
        isDebitCallActive: true,
        collectionTime: '5:00 PM',
        partial: {
          notification: ['Partial Notice - SMS', 'Partial Notice - Email'],
          status: 'Active',
        },
        tScenario: 'Next T+21',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
      {
        unsuccessful: {
          notification: [
            'Last Chance To Pay Notice - SMS',
            'Last Chance To Pay Notice - Email',
          ],
          status: 'Active',
        },
        isDebitCallActive: true,
        collectionTime: '5:00 PM',
        partial: {
          notification: ['Partial Notice - SMS', 'Partial Notice - Email'],
          status: 'Active',
        },
        tScenario: 'Next Next T-3',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
      {
        unsuccessful: { notification: [], status: 'Inactive' },
        isDebitCallActive: true,
        collectionTime: '5:00 PM',
        partial: {
          notification: ['Partial Notice - SMS', 'Partial Notice - Email'],
          status: 'Active',
        },
        tScenario: 'Next Next T-1',
        successful: {
          notification: [
            'Successful Notice - SMS',
            'Successful Notice - Email',
          ],
          status: 'Active',
        },
      },
    ],
  },
];

const tScenario = 'T';
const collectionTime = '10:00 AM';

const recurringPaymentSchedule =
  recurringPaymentSchedules[0].debitCallSchedule.find(
    element =>
      element.isDebitCallActive &&
      element.tScenario === tScenario &&
      element.collectionTime === collectionTime,
  );

console.log(recurringPaymentSchedule);
