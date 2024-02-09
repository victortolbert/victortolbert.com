<script setup lang="ts">
const props = defineProps({
  model: Object,
  title: String,
  successCallback: Function,
  cancelCallback: Function,
  preSaveCall: Function,
  endPoint: String,
  open: Boolean,
})

//   @Prop({ required: true, type: Object })
//     modelValidator!: IValidatorList<T>

//   @Prop({ required: true, type: Boolean, default: false })
//     isInsert!: boolean

//   @Prop({ required: false, type: Boolean, default: true })
//     showButtons!: boolean

//   @Prop({ required: false, type: Boolean, default: false })
//     isPreSaveCallSuccess!: boolean

//   @Prop({ required: true, type: String })
//     accessToken!: string

//   @Prop({ required: true, type: String })
//     exemplarApiUrl!: string

//   @Prop({ required: true, type: Number })
//     userId!: number

//   @Prop({ required: false, type: Boolean, default: false })
//     canUpdate!: boolean

//   @Prop({ required: false, type: Boolean, default: false })
//     canDelete!: boolean

//   @Prop({ required: false, type: Boolean, default: false })
//     canCreate!: boolean

//   @Prop({ required: false, type: Boolean, default: false })
//     selfUserUpdate!: boolean

//   @Prop({ required: false, type: Boolean, default: true })
//     showValidationMessages!: boolean

//   @Prop({ required: false, type: String, default: '' })
//     saveEndPoint!: string

//   @Prop({ required: false, type: Boolean, default: false })
//     byPassHasChanges!: boolean

//   @Prop({ required: false, type: Boolean, default: false })
//     validateForm!: boolean

//   @Prop({ required: false, type: Boolean, default: false })
//     showLoader!: boolean

//   @Prop({ required: false, type: Boolean, default: false })
//     stringify!: boolean

//   @Prop({ required: false, type: Boolean, default: false })
//     skipCloseEvent!: boolean

//   @Prop({ required: false, type: Boolean, default: true })
//     showAuditLog: boolean

//   dataAccess: DataAccess = new DataAccess(this.accessToken)

//   originalModel!: any

//   validationResult: string[] = new Array<string>()

//   busy: boolean = false

//   confirmModal = {
//     open: false,
//     promptText: '',
//     promptText2: '',
//     title: '',
//   }

//   @Watch('validateForm')
//   private CallValidate() {
//     if (this.validateForm)
//       this.validate()
//   }

//   @Watch('model', { deep: true })
//   private SetOriginalModel() {
//     this.originalModel = this.originalModel ?? cloneDeep(this.model)
//   }

//   Cancel() {
//     if (this.HasChanges()) {
//       this.confirmModal.title = 'Confirm Cancel'
//       this.confirmModal.promptText = 'You have uncommitted changes.'
//       this.confirmModal.promptText2 = 'Are you sure you wish to Cancel?'
//       this.confirmModal.open = true
//       return
//     }
//     this.originalModel = null
//     this.validationResult = []
//     if (this.cancelCallback !== undefined)
//       this.cancelCallback()

//     GlobalEventBus.$emit(GlobalEvents.CloseEditForm, true)
//   }

//   mounted() {
//     console.log('Edit Form Component Mounted.')
//     console.log(`Show Loader: ${this.showLoader}`)
//     GlobalEventBus.$on(GlobalEvents.Validate, async () => {
//       this.validationResult = await this.modelValidator.Validate(this.model)

//       if (this.validationResult.length > 0) {
//         console.log(' Model Failed validation....')
//         GlobalEventBus.$emit(GlobalEvents.Validated, false)
//         return false
//       }
//       else {
//         console.log(' Model Passed validation....')
//         GlobalEventBus.$emit(GlobalEvents.Validated, true)
//         this.validationResult = []
//       }
//     })

//     this.SetOriginalModel()

//     GlobalEventBus.$emit(GlobalEvents.EditFormMounted, true)
//   }

//   OpenAuditLog() {
//     if (this.model?.Id && this.model?.EntityName)
//       GlobalEventBus.$emit(GlobalEvents.OpenAuditLog, this.model.Id, this.model?.EntityName)
//   }

//   onHide() {
//     this.confirmModal.open = false
//     this.originalModel = null
//   }

//   onConfirmClicked() {
//     this.validationResult = []
//     if (this.cancelCallback !== undefined)
//       this.cancelCallback()

//     if (!this.skipCloseEvent)
//       GlobalEventBus.$emit(GlobalEvents.CloseEditForm, true)
//   }

//   async validate(): Promise<boolean> {
//     console.log('validate Entered')
//     this.validationResult = await this.modelValidator.Validate(this.model)

//     if (this.validationResult.length > 0) {
//       console.log(' Model Failed validation....')
//       GlobalEventBus.$emit(GlobalEvents.Validated, false)
//       return false
//     }
//     else {
//       console.log(' Model Passed validation....')
//       this.validationResult = []
//       GlobalEventBus.$emit(GlobalEvents.Validated, true)
//       return true
//     }
//   }

//   SortString(text: string): string {
//     return text.split('').sort().join('')
//   }

//   HasChanges(): boolean {
//     // console.log("originalModel: " + JSON.stringify(this.originalModel));
//     // console.log("new Model: " + JSON.stringify(this.model));
//     console.log('Checking for changes....')

//     if (isEqual(this.model, this.originalModel))
//       return false
//     else
//       return true
//   }

//   ErrorCallback(model: any) {
//     if (model.result === 2) {
//       this.validationResult = model.resultText.split(',')
//       GlobalEventBus.$emit(GlobalEvents.Validated, false)
//     }

//     this.busy = false
//   }

//   async SaveCallback(response: any) {
//     this.busy = false
//     this.onHide()

//     if (this.successCallback !== undefined)
//       await this.successCallback(response)

//     if (!this.skipCloseEvent)
//       GlobalEventBus.$emit(GlobalEvents.CloseEditForm, false, response?.Id ?? 0)
//   }

//   async CheckValidatorType() {
//     try {
//       await Promise.resolve(this.modelValidator.Validate(this.model)).then((value) => {
//         this.validationResult = value
//       })
//     }
//     catch (error) {
//       console.log(error)
//     }
//   }

//   async Save() {
//     this.validationResult = []

//     if (!this.byPassHasChanges) {
//       if (!this.HasChanges()) {
//         ToastrHelper.DisplayToastWarning('No Changes have been made.')
//         return
//       }
//     }

//     const regexx = /^[A-Za-z0-9-.]+$/
//     if (!regexx.test(this.model?.ClaimNumber)) {
//       ToastrHelper.DisplayToastWarning('No special characters or spaces should be entered in Claim Number.')
//       return
//     }

//     if (this.model.ClaimSpecificEmail != null && this.model.ClaimSpecificEmail != '') {
//       const regex = /^[a-z0-9-.]+@claims.usaa.com$/
//       if (!regex.test(this.model.ClaimSpecificEmail.trim().toLowerCase())) {
//         ToastrHelper.DisplayToastWarning(`Please add USAA claims-specific email ID in order to proceed with this submission. If you are an independent adjuster submitting the claim for USAA, please choose "Other customer" as the carrier to proceed. Thank you.`)
//         return
//       }
//     }

//     console.log('Validating...')
//     await this.CheckValidatorType()
//     if (await this.validate() === false)
//       return

//     console.log(`preSaveCall...${this.preSaveCall}`)

//     if (this.preSaveCall) {
//       await this.preSaveCall()

//       if (this.isPreSaveCallSuccess === false)
//         return

//       console.log('preSaveCall finished')
//     }
//     console.log('Calling Save Request')

//     this.SaveRequest()
//   }

//   async SaveRequest() {
//     this.busy = true

//     let route: string = ''

//     if (this.saveEndPoint)
//       route = this.saveEndPoint
//     else
//       route = this.endPoint

//     if (this.isInsert) {
//       console.log('Posting Data....')

//       if (this.stringify)
//         this.dataAccess.PostAsync(route, JSON.stringify(this.model), this.SaveCallback, this.ErrorCallback)
//       else
//         this.dataAccess.PostAsync(route, this.model, this.SaveCallback, this.ErrorCallback)
//     }
//     else {
//       console.log('Updating Data....')

//       if (this.stringify)
//         this.dataAccess.PutAsync(`${route}/${this.model.Id}?updatedBy=${this.userId}`, JSON.stringify(this.model), this.SaveCallback, this.ErrorCallback)
//       else
//         this.dataAccess.PutAsync(`${route}/${this.model.Id}?updatedBy=${this.userId}`, this.model, this.SaveCallback, this.ErrorCallback)
//     }
//   }
// }
</script>
