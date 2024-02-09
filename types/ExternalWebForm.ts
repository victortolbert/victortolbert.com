import { NewClaimBase } from '~/types'

export class ExternalWebForm extends NewClaimBase {
  public AppointmentDate: string = ''
  public AdjusterReceivesBill: boolean
  public BillingContactFirstName: string = ''
  public BillingContactLastName: string = ''
  public BillingContactEmail: string = ''
  public BillingContactPhone: string = ''
  public CompanyName: string = ''
  public AdjusterConfirmEmail = ''
  public AdjusterFirstName: string = ''
  public AdjusterLastName: string = ''
  public AdjusterEmail: string = ''
  public AdjusterPhone: string = ''
  public IsIndependentAdjuster: boolean
  public IsInCoverageArea: boolean = false
  public RequiresPhone: boolean = false
  public ClaimSpecificEmail: string = ''
  public MilitaryRankSalutation: string = ''
}
