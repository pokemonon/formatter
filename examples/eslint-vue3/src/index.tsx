import { defineComponent } from 'vue'
import { log } from '@/utils/common'

function Child() {
  return (
    <div>
      <div></div>
      a
    </div>
  )
}

export default defineComponent({
  setup() {
    return () => (
      <div>
        <div>h</div>
      </div>
    )
  },
})
