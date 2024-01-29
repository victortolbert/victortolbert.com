import toastr from 'toastr'

export enum ToasterPosition {
  topRight = 'toast-top-right',
  topLeft = 'toast-top-left',
  bottomRight = 'toast-bottom-right',
  bottomLeft = 'toast-bottom-left',
  centerCenter = 'toast-center-center',
}

export enum Toast {
  error,
  success,
  warning,
}


export class ToastHelper {
  private static DisplayToast(
    toastMessageType: Toast,
    message: string,
    title: string,
    showClose: boolean = false,
  ) {
    toastr.options.closeButton = showClose
    toastr.remove()
    toastr.clear()

    switch (toastMessageType) {
      case Toast.error: {
        toastr.options.closeButton = showClose

        toastr.options.timeOut = 0
        toastr.options.extendedTimeOut = 0
        toastr.options.positionClass = 'toast-bottom-left'
        toastr.error(message, title)
        break
      }
      case Toast.success: {
        toastr.options.timeOut = 4000
        toastr.options.positionClass = 'toast-bottom-left'
        toastr.success(message, title)
        break
      }
      case Toast.warning: {
        toastr.options.timeOut = 4000

        toastr.options.positionClass = 'toast-bottom-left'
        toastr.warning(message, title)
        break
      }
    }
  }

  public static DisplayToastError(message: string, title: string = '') {
    this.DisplayToast(Toast.Error, message, title, true)
  }

  public static DisplayToastWarning(message: string, title: string = '') {
    this.DisplayToast(Toast.Warning, message, title)
  }

  public static DisplayToastSuccess(message: string, title: string = '') {
    this.DisplayToast(Toast.Success, message, title)
  }
}
