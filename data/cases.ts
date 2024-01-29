import { times } from 'lodash'
import { faker } from '@faker-js/faker'

// import { Factory } from 'rosie'

export const columns = [
  { key: 'Id', label: 'Id', hidden: true },
  { key: 'ProjectNumber', label: 'Project Number', hidden: false },
  { key: 'ClaimNumber', label: 'Claim Number', hidden: true },
  { key: 'Account', label: 'Account' },
  { key: 'FlaggedBy', label: 'Flagged By', hidden: true },
  { key: 'InspectionDate', label: 'Inspection Date', hidden: true },
  { key: 'InspectionStart', label: 'Inspection Start', hidden: true },
  { key: 'InspectionFinish', label: 'Inspection Finish', hidden: true },
  { key: 'InsAdj', label: 'Adjuster' },
  { key: 'ServiceType', label: 'Service Type', hidden: true },
  { key: 'City', label: 'City', hidden: true },
  { key: 'State', label: 'State', hidden: true },
  { key: 'PostalCode', label: 'Zip Code' },
  { key: 'ServiceTech', label: 'Technician' },
  { key: 'Territory', label: 'Territory', hidden: true },
  { key: 'Area', label: 'Area', hidden: true },
  { key: 'Status', label: 'Status', hidden: true },
  { key: 'actions', label: 'Actions' },
]

export const projects = times(50, (n) => {
  const created_on = faker.date.recent()
  // const customer = faker.helpers.arrayElement(['Allstate', 'Statefarm', 'Farmers'])

  return {
    id: n + 1,
    ProjectNumber: n + 202307000 + 1,
    ClaimNumber: faker.string.alphanumeric({
      length: { min: 5, max: 10 },
      casing: 'upper',
    }),
    Account: faker.helpers.arrayElement([
      'Allstate',
      'Statefarm',
      'Farmers',
      'Esurance',
      'Encompass',
      'California State Auto Association',
      'Liberty Mutual',
    ]),
    InsCompany: faker.helpers.arrayElement([
      'Allstate',
      'Statefarm',
      'Farmers',
      'Esurance',
      'Encompass',
      'California State Auto Association',
      'Liberty Mutual',
    ]),
    InsuredName: faker.person.fullName(),
    // InsuredPhone: faker.phone.number(),
    // InsuredEmail: faker.internet.email(),
    AdjusterName: faker.helpers.arrayElement(['David Edwards', 'Jordan Peterson']),
    InsAdj: faker.helpers.arrayElement(['David Edwards', 'Jordan Peterson']),
    // AdjusterPhone: faker.phone.number(),
    // AdjusterEmail: faker.internet.email(),
    TechnicianName: faker.helpers.arrayElement(['Bobby James', 'Ricky Nelson']),
    ServiceTech: faker.helpers.arrayElement(['Bobby James', 'Ricky Nelson']),
    // TechnicianEmail: faker.internet.email(),
    // ProjectStatus: faker.helpers.arrayElement([
    //   'Call Queue',
    //   'Assigned',
    //   'Confirmed',
    //   'Working',
    //   'Review',
    //   'Complete',
    //   'Billed',
    //   'Closed',
    //   'Pending',
    //   'Schedule',
    //   'Triage',
    // ]),
    // created_on,

    // address: faker.location.streetAddress(),
    City: faker.location.city(),
    State: faker.location.state({ abbreviated: true }),
    // is_active: faker.helpers.arrayElement([0, 1]),
    // zip_code: faker.location.zipCode(),
    PostalCode: faker.location.zipCode(),
    // avatar: faker.image.avatar(),
    // customer,
    service_area: faker.helpers.arrayElement(['DC Metro', 'Atlanta']),
    service_territory: faker.helpers.arrayElement(['Mid-Atlantic', 'Georgia']),
    // territory_lead: faker.helpers.arrayElement(['Josh Fields', 'Sam Smith']),
    // service_type: faker.helpers.arrayElement([
    //   'Direct Inspect',
    //   'Virtual Inspect',
    //   'Emergency Tarp',
    //   'Estimate',
    //   'Ladder Assist',
    // ]),
    provider_id: faker.string.uuid(),
    last_seen: faker.date.between({ from: created_on, to: new Date() }),
    requires_haag: 0,
  }
})
