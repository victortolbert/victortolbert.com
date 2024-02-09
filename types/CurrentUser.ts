import type { UserRole } from './UserRole'

export class CurrentUser {
  public IsAuthenticated: boolean = true
  public IsAuthorized: boolean = true
  public FullName: string = ''
  public Name: string = ''
  public Phone: string = ''
  public Email: string = ''
  public StatusCode: string = ''
  public UserId: number = 0
  public UserTypeId: number = 0
  public UserTypeName: string = ''
  public UserRoles: UserRole[] = []
}
