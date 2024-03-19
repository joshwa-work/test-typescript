const ActivityType = 'Comms';

const data = {
  Collectionschedulecode: 'CS01005',
  BusinessModel: 'Model 1',
  DistributionChannel: 'All - Gcash | UNO',
  ProductType: 'Whole Life',
  ProductCode: 'WLME001',
  Modeofpayment: 'Monthly',
  ActivityType: 'Comms',
  ActivityDescription: 'End of collections (with CV)',
  Time: '9:00 AM',
  'T-3': 'N/A',
  T: 'N/A',
  'T+1': 'N/A',
  'T+2': 'N/A',
  'T+7': 'N/A',
  'T+14': 'N/A',
  'T+21': 'N/A',
  'NextT-3': 'N/A',
  NextT: 'N/A',
  'NextT+1': 'N/A',
  'NextT+2': 'N/A',
  'NextT+7': 'N/A',
  'NextT+14': 'N/A',
  'NextT+21': 'N/A',
  'NextNextT-3': 'N/A',
  'NextNextT-1': 'N/A',
  NextNextT: 'N/A',
  'T+61': 'N/A',
  'T+62': 'N/A',
  'T+63': 'SMS_ETI_00001 | EDM_ETI_00001',
  ETIExpiryDate: 'N/A',
};

const lapsationComms = {
  tScenario: 'T+63',
  collectionTime: '9:00 AM',
  notification: ['Lapsation Notice - SMS', 'Lapsation Notice - Email'],
};

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const lapsationNotice = (ActivityType === 'Comms'
  ? Object.entries(data)
      .filter(([, value]) => {
        const values = value.split(' | ');

        return values.some(element =>
          lapsationComms
            .map((config: { id: string }) => config.id)
            .includes(element),
        );
      })
      .map(([key, value]) => {
        const values = value.split(' | ');
        const notification = values.map(element => {
          const { commsTitle, msgType } = lapsationComms.find(
            comms => comms.id === element,
          );
          return `${commsTitle} - ${msgType}`;
        });

        return {
          tScenario: key,
          collectionTime: CollectionTime,
          notification,
        };
      })
  : [])[0] || {
  tScenario: null,
  collectionTime: null,
  notification: [],
};

console.log(lapsationNotice);
