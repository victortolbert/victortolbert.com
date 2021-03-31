<script lang="ts">
import { inject } from 'vue'
import { InjectKeyUser } from './context'

export default {
  setup() {
    const user = inject(InjectKeyUser) // UserInfo | undefined

    if (user) {
      console.log(user.name) // Anthony
    }
  }
}
</script>
