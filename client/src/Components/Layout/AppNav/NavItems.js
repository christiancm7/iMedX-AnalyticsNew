export const HomeNav = [
  {
    icon: 'pe-7s-arc',
    label: 'Search',
    to: '#/Search',
  },
];
export const PatientsNav = [
  {
    icon: 'pe-7s-id',
    label: 'New Patient',
    to: '#/patients/new',
  },
  {
    icon: 'pe-7s-timer',
    label: 'Recently Opened',
    to: '#/patients/recent',
  },
];
export const BillingNav = [
  {
    icon: 'pe-7s-cash',
    label: 'Billed',
    content: [
      {
        label: 'Batches',
        to: '#/billing/billed/batches',
      },
      {
        label: 'Claims',
        to: '#/billing/billed/claims',
      },
    ],
  },
  {
    icon: 'pe-7s-target',
    label: 'Unbilled',
    content: [
      {
        label: 'Pending/On Hold',
        to: '#/billing/unbilled/pending',
      },
      {
        label: 'Rebilling',
        to: '#/billing/unbilled/rebilling',
      },
      {
        label: 'Self Pay',
        to: '#/billing/unbilled/self-pay',
      },
    ],
  },
  {
    icon: 'pe-7s-anchor',
    label: 'Misc',
    content: [
      {
        label: 'EOBS',
        to: '#/billing/misc/eobs',
      },
      {
        label: 'Posting',
        to: '#/billing/misc/posting',
      },
      {
        label: 'Adjustment Batches',
        to: '#/billing/misc/adjustment-batches',
      },
    ],
  },
];
export const AnalyticsNav = [
  {
    icon: 'pe-7s-graph',
    label: 'Dashboards',
    content: [
      {
        label: 'Billing',
        to: '#/dashboards/billing',
      },
      {
        label: 'Inpatient',
        to: '#/dashboards/inpatient',
      },
      {
        label: 'Medicare',
        to: '#/dashboards/medicare',
      },
      {
        label: 'Outpatient',
        to: '#/dashboards/outpatient',
      },
      {
        label: 'Physician',
        to: '#/dashboards/physician',
      },
      {
        label: 'ASC',
        to: '#/dashboards/asc',
      },
    ],
  },
  {
    icon: 'pe-7s-notebook',
    label: 'Reports',
    to: '#/reports/',
  },
];
export const AdminNav = [
  {
    icon: 'pe-7s-user',
    label: 'TBD',
    to: '#/admin/',
  },
];
