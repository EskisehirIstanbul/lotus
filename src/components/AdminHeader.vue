<template>
  <div class="fixed">
    <header class="header">
      <div class="header-right">
        <div class="admin-panel">Admin Panel</div>
      </div>
      <div class="logo">
        <img
          src="../assets/images/uskudar-universitesi-logo.png"
          alt="Logo"
          class="img-fluid"
          style="width: 5 rem; height: 5rem"
        />
      </div>
    </header>
  </div>
</template>

<style scoped>
.fixed {
  position: fixed;
  width: 100%;
  z-index: 1;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

</style>
