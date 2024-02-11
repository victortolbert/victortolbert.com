export const statuses = {
  'Ready': {
    icon: 'i-ph-check-square-duotone',
    className: 'text-green-500',
  },
  'Review': {
    icon: 'i-ph-minus-square-duotone',
    className: 'text-yellow-500',
  },
  'Prototype': {
    icon: 'i-ph-square-duotone',
    className: 'text-blue-500',
  },
  'Deprecated': {
    icon: 'i-ph-x-square-duotone',
    className: 'text-red-500',
  },
  'Not Applicable': {
    icon: 'i-ph-minus-duotone',
    className: 'text-gray-500',
  },
}

export const videaStatuses = {
  'Triage': {
    id: 'triage',
    label: 'Triage',
    href: '/projects/triage',
    icon: 'i-ph-square-duotone',
    className: 'text-neutral-500',
  },
  'Call Queue': {
    id: 'call-queue',
    href: '/projects/call-queue',
    icon: 'i-ph-square-duotone',
    className: 'text-neutral-500',
  },
  'Schedule': {
    id: 'schedule',
    href: '/projects/schedule',
    icon: 'i-ph-square-duotone',
    className: 'text-neutral-500',
  },
  'Assigned': {
    id: 'assigned',
    href: '/projects/assigned',
    icon: 'i-ph-square-duotone',
    className: 'text-neutral-500',
  },
  'Confirmed': {
    id: 'confirmed',
    href: '/projects/confirmed',
    icon: 'i-ph-square-duotone',
    className: 'text-neutral-500',
  },
  'Working': {
    id: 'working',
    href: '/projects/working',
    icon: 'i-ph-square-duotone',
    className: 'text-neutral-500',
  },
  'Review': {
    id: 'review',
    href: '/projects/review',
    icon: 'i-ph-square-duotone',
    className: 'text-neutral-500',
  },
  'Complete': {
    id: 'complete',
    href: '/projects/complete',
    icon: 'i-ph-square-duotone',
    className: 'text-neutral-500',
  },
  'Billed': {
    id: 'billed',
    href: '/projects/billed',
    icon: 'i-ph-square-duotone',
    className: 'text-neutral-500',
  },
  'Closed': {
    id: 'closed',
    href: '/projects/closed',
    icon: 'i-ph-square-duotone',
    className: 'text-neutral-500',
  },
  'Hold': {
    id: 'hold',
    href: '/projects/hold',
    icon: 'i-ph-square-duotone',
    className: 'text-neutral-500',
  },
  'Archived': {
    id: 'archived',
    href: '/projects/archived',
    icon: 'i-ph-square-duotone',
    className: 'text-neutral-500',
  },
  'Pending': {
    id: 'pending',
    href: '/projects/pending',
    icon: 'i-ph-square-duotone',
    className: 'text-neutral-500',
  },
  'Failed Validation': {
    id: 'failed-validation',
    href: '/projects/failed-validation',
    icon: 'i-ph-square-duotone',
    className: 'text-neutral-500',
  },
}

export const demographics = [
  {
    male: [
      {
        checked: false,
        group: 'M12+',
      },
      {
        checked: false,
        group: 'M12-17',
      },
      {
        checked: false,
        group: 'M12-20',
      },
      {
        checked: false,
        group: 'M18+',
      },
      {
        checked: false,
        group: 'M18-24',
      },
      {
        checked: false,
        group: 'M18-34',
      },
      {
        checked: false,
        group: 'M18-49',
      },
      {
        checked: false,
        group: 'M18-54',
      },
      {
        checked: false,
        group: 'M18-64',
      },
      {
        checked: false,
        group: 'M21+',
      },
      {
        checked: false,
        group: 'M21-24',
      },
      {
        checked: false,
        group: 'M21-34',
      },
      {
        checked: false,
        group: 'M21-49',
      },
      {
        checked: false,
        group: 'M21-54',
      },
      {
        checked: false,
        group: 'M21-64',
      },
      {
        checked: false,
        group: 'M25-49',
      },
      {
        checked: true,
        group: 'M25-54',
      },
      {
        checked: false,
        group: 'M25-64',
      },
      {
        checked: false,
        group: 'M35+',
      },
      {
        checked: false,
        group: 'M35-54',
      },
      {
        checked: false,
        group: 'M35-64',
      },
      {
        checked: false,
        group: 'M50+',
      },
      {
        checked: false,
        group: 'M55+',
      },
      {
        checked: false,
        group: 'M65+',
      },
    ],
  },
  {
    female: [
      {
        checked: false,
        group: 'W12+',
      },
      {
        checked: false,
        group: 'W12-17',
      },
      {
        checked: false,
        group: 'W12-20',
      },
      {
        checked: false,
        group: 'W18+',
      },
      {
        checked: false,
        group: 'W18-24',
      },
      {
        checked: false,
        group: 'W18-34',
      },
      {
        checked: false,
        group: 'W18-49',
      },
      {
        checked: false,
        group: 'W18-54',
      },
      {
        checked: false,
        group: 'W18-64',
      },
      {
        checked: false,
        group: 'W21+',
      },
      {
        checked: false,
        group: 'W21-24',
      },
      {
        checked: false,
        group: 'W21-34',
      },
      {
        checked: false,
        group: 'W21-49',
      },
      {
        checked: false,
        group: 'W21-54',
      },
      {
        checked: false,
        group: 'W21-64',
      },
      {
        checked: false,
        group: 'W25-49',
      },
      {
        checked: true,
        group: 'W25-54',
      },
      {
        checked: false,
        group: 'W25-64',
      },
      {
        checked: false,
        group: 'W35+',
      },
      {
        checked: false,
        group: 'W35-54',
      },
      {
        checked: false,
        group: 'W35-64',
      },
      {
        checked: false,
        group: 'W50+',
      },
      {
        checked: false,
        group: 'W55+',
      },
      {
        checked: false,
        group: 'W65+',
      },
    ],
  },
  {
    Adult: [
      {
        checked: false,
        group: 'P12+',
      },
      {
        checked: false,
        group: 'P12-17',
      },
      {
        checked: false,
        group: 'P12-20',
      },
      {
        checked: false,
        group: 'P18+',
      },
      {
        checked: false,
        group: 'P18-24',
      },
      {
        checked: true,
        group: 'P18-34',
      },
      {
        checked: true,
        group: 'P18-49',
      },
      {
        checked: false,
        group: 'P18-54',
      },
      {
        checked: false,
        group: 'P18-64',
      },
      {
        checked: false,
        group: 'P21+',
      },
      {
        checked: false,
        group: 'P21-24',
      },
      {
        checked: false,
        group: 'P21-34',
      },
      {
        checked: false,
        group: 'P21-49',
      },
      {
        checked: false,
        group: 'P21-54',
      },
      {
        checked: false,
        group: 'P21-64',
      },
      {
        checked: true,
        group: 'P25-49',
      },
      {
        checked: true,
        group: 'P25-54',
      },
      {
        checked: false,
        group: 'P25-64',
      },
      {
        checked: false,
        group: 'P35+',
      },
      {
        checked: false,
        group: 'P35-54',
      },
      {
        checked: false,
        group: 'P35-64',
      },
      {
        checked: false,
        group: 'P50+',
      },
      {
        checked: false,
        group: 'P55+',
      },
      {
        checked: false,
        group: 'P65+',
      },
    ],
  },
]
