import { times } from 'lodash'
import { faker } from '@faker-js/faker'

// import { Factory } from 'rosie'

export const columns = [
  { key: 'id', label: 'ID', hidden: true },
  { key: 'workorder_number', label: 'Workorder Number', hidden: false },
  { key: 'claim_number', label: 'Claim Number', hidden: true },
  { key: 'account', label: 'Account' },
  { key: 'flagged_by', label: 'Flagged By', hidden: true },
  { key: 'inspection_date', label: 'Inspection Date', hidden: true },
  { key: 'inspection_start', label: 'Inspection Start', hidden: true },
  { key: 'inspection_finish', label: 'Inspection Finish', hidden: true },
  { key: 'adjuster', label: 'Adjuster' },
  { key: 'service_type', label: 'Service Type', hidden: true },
  { key: 'city', label: 'City', hidden: true },
  { key: 'state', label: 'State', hidden: true },
  { key: 'postal_code', label: 'Zip Code' },
  { key: 'service_technician', label: 'Technician' },
  { key: 'service_territory', label: 'Territory', hidden: true },
  { key: 'service_area', label: 'Area', hidden: true },
  { key: 'status', label: 'Status', hidden: true },
  { key: 'actions', label: 'Actions' },
]

export const workorders = times(50, (n) => {
  const created_on = faker.date.recent()
  // const customer = faker.helpers.arrayElement(['Allstate', 'Statefarm', 'Farmers'])

  return {
    id: n + 1,
    workorder_number: n + 202307000 + 1,
    claim_number: faker.string.alphanumeric({
      length: { min: 5, max: 10 },
      casing: 'upper',
    }),
    account: faker.helpers.arrayElement([
      'Allstate',
      'Statefarm',
      'Farmers',
      'Esurance',
      'Encompass',
      'California State Auto Association',
      'Liberty Mutual',
    ]),
    company: faker.helpers.arrayElement([
      'Allstate',
      'Statefarm',
      'Farmers',
      'Esurance',
      'Encompass',
      'California State Auto Association',
      'Liberty Mutual',
    ]),
    insured_name: faker.person.fullName(),
    adjuster_name: faker.helpers.arrayElement(['David Edwards', 'Jordan Peterson']),
    adjuster: faker.helpers.arrayElement(['David Edwards', 'Jordan Peterson']),
    service_technician: faker.helpers.arrayElement(['Bobby James', 'Ricky Nelson']),
    city: faker.location.city(),
    state: faker.location.state({ abbreviated: true }),
    postal_code: faker.location.zipCode(),
    service_area: faker.helpers.arrayElement(['DC Metro', 'Atlanta']),
    service_territory: faker.helpers.arrayElement(['Mid-Atlantic', 'Georgia']),
    service_type: faker.helpers.arrayElement([
      'Direct Inspect',
      'Virtual Inspect',
      'Emergency Tarp',
      'Estimate',
      'Ladder Assist',
    ]),
    provider_id: faker.string.uuid(),
    last_seen: faker.date.between({ from: created_on, to: new Date() }),
    requires_haag: 0,
  }
})
