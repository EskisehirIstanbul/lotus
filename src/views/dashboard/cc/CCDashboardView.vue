<template>
  <!-- Todo  -->
  <div
    class="container-fluid py-3 header text-white position-relative hdr"
    style="height: 65px; background-color: #0e163d"
  >
    <div class="row" style="padding-right: -25rem !important">
      <div class="col-3 align-self-center position-absolute start-0">
        <img
          src="../../../assets/images/user.png"
          alt="Logo"
          width="45"
          height="45"
          class="d-inline-block align-text-top"
        />
      </div>
      <div class="col-3 align-self-center position-absolute start-30 mt-2" style="left: 70px">
        <h5><small>Name SURNAME</small></h5>
      </div>
      <div
        class="col-3 position-absolute align-self-center start-30 mt-2 ms-5 text-end me-2 ps-3"
        style="right: 5rem"
      >
        <button class="" style="border-radius: 5px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-mail"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
            ></path>
            <path d="M3 7l9 6l9 -6"></path>
          </svg>
        </button>
      </div>
      <div
        class="col-3 position-absolute align-self-center start-30 mt-2 ms-5 text-end me-3"
        style="right: 0rem"
      >
        <a href="" class="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-logout"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
            ></path>
            <path d="M9 12h12l-3 -3"></path>
            <path d="M18 15l3 -3"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>

  <!-- Aşağıdaki tag dinamik olarak url'ye göre content değiştirecek -->
  <RouterView />
</template>
<style scoped>
@import url('../../../assets/css/style.css');
</style>
