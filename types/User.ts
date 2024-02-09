import type { IEditable } from '../Interfaces/IEditable'

export class User implements IEditable {
  public Id: number | null
  public AddressLatitude: string | null = null
  public AddressLongitude: string | null = null
  public CreatedBy: number | null
  public Comment: string | null = null
  public CompanyUserId: number[] = []
  public FirstName: string | null = null
  public FullName: string | null = null
  public HaagCertificationNumber: string | null = null
  public Initials: string | null = null
  public IsActive: boolean | null = null
  public IsHaagCertified: boolean | null = null
  public IsIdentityUser: boolean | null = null
  public IsInCollections: boolean | null = null
  public LastName: string | null = null
  public MailingAddress: string | null = null
  public MailingCity: string | null = null
  public MailingPostalCode: string | null = null
  public MailingState: string | null = null
  public MailingStateId: number | null = null
  public MailingStreetAddress1: string | null = null
  public MailingStreetAddress2: string | null = null
  public ManagedAdjusterIds: number[] = []
  public MiddleName: string | null = null
  public PrimaryEmail: string = ''
  public PrimaryPhone: string = ''
  public PrimaryPhoneExt: string | null = null
  public Role: string[] = []
  public RoleIds: number[] | null = []
  public RowVersion: number[] = []
  public SecondaryEmail: string | null = null
  public SecondaryPhone: string = ''
  public ServiceCity: string | null = null
  public ServicePostalCode: string | null = null
  public ServiceState: string | null = null
  public ServiceStateId: number | null = null
  public ServiceStreetAddress1: string | null = null
  public ServiceStreetAddress2: string | null = null
  public UserType: string | null = null
  public UserTypeId: number | null = null
  public previousEmail: string | null = null
  public ControllerIndex: string = ''
  public EntityName: string = ''
}
