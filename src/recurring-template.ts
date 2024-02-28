const recurringPaymentTemplate = [
  {
    msgType: 'SMS',
    template: { v4: 'PremiumReminderTV4' },
    id: 'SMS_REM_00001',
    commsTitle: 'Reminder Notice',
    status: 'Active',
  },
  {
    msgType: 'Email',
    template: { v4: 'PaymentReminderV4' },
    id: 'EDM_REM_00001',
    commsTitle: 'Reminder Notice',
    status: 'Active',
  },
];

const smsTemplate = recurringPaymentTemplate.find(
  element => element.msgType === 'SMS',
);
console.log('SMS:', smsTemplate?.template.v4);

const emailTemplate = recurringPaymentTemplate.find(
  element => element.msgType === 'Email',
);
console.log('Email:', emailTemplate?.template.v4);

// const [sms, email] = recurringPaymentTemplate;
// console.log({ sms, email });
