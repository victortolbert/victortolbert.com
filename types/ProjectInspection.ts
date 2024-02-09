import type { ProjectInspectionTechnician, ServiceAreaTechnician, ServiceRegionManager } from '~/types'
import { ExemplarEntityTypes } from '~/types'

export class ProjectInspection {
  public Assignable: number = 0
  public CreatedBy: number = 0
  public CreatedByUser: string = ''
  public CreatedOn: string = ''
  public Duration: number = 90
  public EntityName: string = ExemplarEntityTypes.ProjectInspection
  public Id: number = 0
  public IsReschedule: boolean | null = null
  public InspectionTechnicians: string = ''
  public RescheduleReasonTypeId: number | null = null
  public MaxServiceTypeDuration: number = 0
  public PreviousIsReschedule: boolean | null = null
  public ProjectId: number = 0
  public ProjectNumber: string = ''
  public ProjectInspectionTechnicianIds: string[] = []
  public ProjectInspectionTechnicians: ProjectInspectionTechnician[] | null = []
  public RowVersion: number[] = []
  public RequiresServiceTechnician: boolean | null = null
  public RescheduleReason: string = ''
  public ScheduleDate: string = ''
  public ScheduleDateObject: Date
  public ScheduleTime: string = ''
  public ServiceAreaId: number = 0
  public ServiceAreaName: string = ''
  public ServiceRegionId: number = 0
  public ServiceRegionManagers: ServiceRegionManager[] = []
  public ServiceRegionName: string = ''
  public ServiceTechnicians: ServiceAreaTechnician[] = []
  public ServiceTechniciansWithPhone: string[] = []
  // Note: these timewindow values aren't a part of the db model. They are just used in the front end to make life a little easier when scheduling inspections
  public TimeWindowStart: Date | null = null
  public TimeWindowEnd: Date | null = null
  public IsLivegenicInspection: boolean | null = null
  public OrderHover: boolean | null = null
  // These are just used to make scheduling on the front end easier
  public defaultStartDate: Date | null = null
  public defaultEndDate: Date | null = null
  public key: number = 0
}
