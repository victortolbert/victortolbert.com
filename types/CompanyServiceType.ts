import type { Editable } from '~/types'

export class CompanyServiceType implements Editable {
  public AvailableServiceTypeId: number
  public AvailableServiceTypeName: string = ''
  public BillingPrice: number
  public CreatedBy: number
  public CreatedByUser: string = ''
  public CreatedOn: Date = new Date()
  public CompanyId: number | null = null
  public Description: string = ''
  public Duration: number = 0
  public EntityName: string = 'CompanyServiceType'
  public HasDescription: boolean
  public HasQuantity: boolean
  public Id: number = 0
  public IsActive: boolean
  public IsDeleted: boolean
  public IsHoverEnabled: boolean
  public HoverReportTypeId: number | null = null
  public HoverReportTypeName: string = ''
  public IsEagleViewEnabled: boolean
  public IsLivegenicEnabled: boolean
  public LaborCost: number
  public OnExternalForm: boolean
  public ParentId: number
  public RequiresDate: boolean = false
  public RequiresPhone: boolean = false
  public ShowCalendar: boolean
  public IsVipBillable: boolean
  public VipPriorityId: number | null = null
  public RowVersion: number[] = []
}
