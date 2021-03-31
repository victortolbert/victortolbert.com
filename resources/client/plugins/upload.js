import {createUpload}  from '@websanova/vue-upload'
import driverHttpAxios from '@websanova/vue-upload/src/drivers/http/axios'

export default (app) => {
  app.use(createUpload({
    plugins: {
      http: app.axios,
    },
    drivers: {
      http: driverHttpAxios,
    },
    options: {

    }
  }))
}
