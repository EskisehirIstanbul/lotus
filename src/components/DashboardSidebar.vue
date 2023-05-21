<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const body = ref(null)
    const sidebar = ref(null)
    const toggle = ref(null)
    const searchBtn = ref(null)
    const modeSwitch = ref(null)
    const modeText = ref(null)

    onMounted(() => {
      body.value = document.querySelector('body')
      sidebar.value = body.value.querySelector('nav')
      toggle.value = body.value.querySelector('.toggle')
      searchBtn.value = body.value.querySelector('.search-box')
      modeSwitch.value = body.value.querySelector('.toggle-switch')
      modeText.value = body.value.querySelector('.mode-text')

      toggle.value.addEventListener('click', () => {
        sidebar.value.classList.toggle('close')
      })

      searchBtn.value.addEventListener('click', () => {
        sidebar.value.classList.remove('close')
      })

      modeSwitch.value.addEventListener('click', () => {
        body.value.classList.toggle('dark')

        if (body.value.classList.contains('dark')) {
          modeText.value.innerText = 'Light mode'
        } else {
          modeText.value.innerText = 'Dark mode'
        }
      })
    })

    return {
      body,
      sidebar,
      toggle,
      searchBtn,
      modeSwitch,
      modeText
    }
  }
}
</script>
