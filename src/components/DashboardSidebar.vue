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

<template>
  <div ref="body">
    <nav class="sidebar close" ref="sidebar">
      <header>
        <div class="image-text">
          <span class="image">
            <img src="logo.png" alt="" />
          </span>

          <div class="text logo-text">
            <span class="name">LOTUS</span>
            <span class="profession">Student Panel</span>
          </div>
        </div>

        <i class="bx bx-chevron-right toggle" ref="toggle"></i>
      </header>

      <div class="menu-bar">
        <div class="menu">
          <li class="search-box" ref="searchBtn">
            <i class="bx bx-search icon"></i>
            <input type="text" placeholder="Search..." />
          </li>

          <ul class="menu-links">
            <li class="nav-link">
              <a href="#">
                <i class="bx bx-home-alt icon"></i>
                <span class="text nav-text">Student</span>
              </a>
            </li>

            <li class="nav-link">
              <a href="#">
                <i class="bx bx-bar-chart-alt-2 icon"></i>
                <span class="text nav-text">Career</span>
              </a>
            </li>

            <li class="nav-link">
              <a href="#">
                <i class="bx bx-bell icon"></i>
                <span class="text nav-text">Notifications</span>
              </a>
            </li>

            <li class="nav-link">
              <a href="#">
                <i class="bx bx-pie-chart-alt icon"></i>
                <span class="text nav-text">Form Process</span>
              </a>
            </li>

            <li class="nav-link">
              <a href="#">
                <i class="bx bx-heart icon"></i>
                <span class="text nav-text">Inbox</span>
              </a>
            </li>

            <li class="nav-link">
              <a href="#">
                <i class="bx bx-wallet icon"></i>
                <span class="text nav-text">Internship</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="bottom-content">
          <li class="">
            <a href="#">
              <i class="bx bx-log-out icon"></i>
              <span class="text nav-text">Logout</span>
            </a>
          </li>

          <li class="mode">
            <div class="sun-moon">
              <i class="bx bx-moon icon moon"></i>
              <i class="bx bx-sun icon sun"></i>
            </div>
            <span class="mode-text text" ref="modeText">Dark mode</span>

            <div class="toggle-switch" ref="modeSwitch">
              <span class="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
    <section class="home">
      <div class="text"></div>
    </section>

    <section class="home">
      <div class="text"></div>
    </section>
  </div>
</template>
