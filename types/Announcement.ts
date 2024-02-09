import type { Editable } from './Editable'

export class Announcement implements Editable {
  public Id: number = 0
  public ControllerIndex: string = 'Announcement/Announcements/Index'
  public CreatedBy: number | null = 1
  public Author: number = 1
  public AuthorName: string = ''
  public AnnouncementText: string = ''
  public EntityName: string = ''
  public CreatedOn: Date = new Date()
  public CreatedOnString: string = ''
  public EndDate: Date | null = null
  public HighPriority: boolean | null = null
  public IsDeleted: boolean | null = false
  public PublishDate: Date | null = null
  public SendEmail: boolean | null = null
  public SendSmsEmail: boolean = false
  public Sent: boolean = false
  public SentOn: Date = new Date()
  public Title: string = ''
  public AnnouncementPublishToIds: any[] = []
  public RowVersion: number[] = []
}
