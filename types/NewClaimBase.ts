import { BillingContactType } from '~/types'
import type { CompanyServiceType, ProjectDamageTypeInsert, ProjectInspection } from '~/types'

export class NewClaimBase {
  public AdjusterId: number | null = null
  public AddressComments: string = ''
  public BillingNotes: string = ''
  public BillingContactType: BillingContactType = BillingContactType.Empty
  public CatastrophicEvent: boolean | null = null
  public City: string = ''
  public ClaimNumber: string = ''
  public CompanyId: number | null = null
  public FromPortal: boolean = false
  public InsuredEmail: string = ''
  public InsuredFirstName: string = ''
  public InsuredLastName: string = ''
  public InsuredPrimaryPhone: string = ''
  public IsReinspect: boolean | null = null
  public PostalCode: string = ''
  public projectSourceId: number
  public StateId: number | null = null
  public StreetAddress1: string = ''
  public StreetAddress2: string = ''
  public SelectedCompanyServiceTypes: CompanyServiceType[] = new Array<CompanyServiceType>()
  public SelectedDamageTypes: ProjectDamageTypeInsert[] = new Array<ProjectDamageTypeInsert>()
  public ProjectInspection: ProjectInspection | null

  public ProjectSourceId(): number {
    return this.projectSourceId
  }
}
