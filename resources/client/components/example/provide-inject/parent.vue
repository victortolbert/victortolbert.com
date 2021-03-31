<script lang="ts">
import { provide } from 'vue'
import { InjectKeyUser } from './context'

export default {
  setup() {
    provide(InjectKeyUser, {
      id: '117', // type error: should be number
      name: 'Anthony'
    })
  }
}
</script>
