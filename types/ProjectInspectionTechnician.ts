export class ProjectInspectionTechnician {
  public Id: number = 0
  public CreatedBy: number = 0
  public CreatedOn: Date
  public DisplayName: string = ''
  public FirstName: string = ''
  public FullName: string = ''
  public LastName: string = ''
  public PrimaryEmail: string = ''
  public ProjectInspectionId: number | null = null
  public UserId: number | null = null
  public WasAutoScheduled: boolean | null = null
}
