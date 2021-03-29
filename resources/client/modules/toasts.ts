import { UserModule } from '~/types'
import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";
const options: PluginOptions = {};

export const install: UserModule = ({ app }) => {
  app.use(Toast, options);
}
