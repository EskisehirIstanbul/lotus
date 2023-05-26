<template>
  <div style="margin-left: 10%; margin-right: 10%; margin-top: 10%">
    <div class="card" style="background-color: #eeeeee">
      <div class="form-container">
        <label for="fakulte">Faculty:</label>
        <select id="fakulte" name="fakulte">
          <!-- Fakülte seçenekleri burada olacak -->
          <option value="fakulte1">Fakülte 1</option>
          <option value="fakulte2">Fakülte 2</option>
          <option value="fakulte3">Fakülte 3</option>
        </select>
      </div>
      <div class="form-container">
        <label for="department">Department:</label>
        <select id="department" name="department">
          <!-- Departman seçenekleri burada olacak -->
          <option value="department1">Departman 1</option>
          <option value="department2">Departman 2</option>
          <option value="department3">Departman 3</option>
        </select>
      </div>
      <div class="form-container">
        <label for="department">Instactor Names:</label>
        <select id="department" name="department">
          <!-- Departman seçenekleri burada olacak -->
          <option value="department1">Instuctor 1</option>
          <option value="department2">Instuctor 2</option>
          <option value="department3">Instuctor 3</option>
        </select>
      </div>
      <div class="button-container">
        <button type="button">Assing New Coordinator</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('../../../../assets/css/style.css');
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}
</style>
