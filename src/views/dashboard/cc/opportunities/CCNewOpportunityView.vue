<template>
  <div style="display: flex; padding-left: 10%; width: 93%; gap: 2%; margin-top: 40px">
    <!-- left part all -->
    <div style="width: 100%">
      <!-- 3 input part -->
      <div style="display: flex; flex-direction: column; margin-bottom: 20%; gap: 20px">
        <label>Internship Task:</label>
        <input
          type="text"
          name=""
          id=""
          style="
            padding: 20px;
            background-color: #f1f1f1;
            border-radius: 20px;
            font-size: large;
            border: none;
          "
          placeholder="Internship Task"
        />
        <label>Company Name:</label>
        <input
          type="text"
          name=""
          id=""
          style="
            padding: 20px;
            background-color: #f1f1f1;
            border-radius: 20px;
            font-size: large;
            border: none;
          "
          placeholder="Company Name"
        />
        <label>Locations:</label>
        <input
          type="text"
          name=""
          id=""
          style="
            padding: 20px;
            background-color: #f1f1f1;
            border-radius: 20px;
            font-size: large;
            border: none;
          "
          placeholder="Locations"
        />
      </div>
      <!-- deadline input -->
      <div style="display: flex; flex-direction: column; gap: 20px; margin-top: -90px">
        <label>Application Deadline:</label>
        <input
          type="datetime"
          name=""
          id=""
          placeholder="dd/mm/yyyy"
          style="
            padding: 20px;
            background-color: #f1f1f1;
            border-radius: 20px;
            font-size: large;
            border: none;
          "
        />
      </div>
    </div>

    <!-- rigth part all -->
    <div style="width: 100%; height: 100%">
      <!-- logo part -->
      <div style="display: flex; flex-direction: column; gap: 20px; margin-bottom: 3%">
        <label for="">Logo:</label>
        <div
          style="
            display: flex;
            flex-direction: row;
            gap: 10px;
            padding: 20px;
            background-color: #f1f1f1;
            border-radius: 20px;
            font-size: large;
            border: none;
          "
        >
          <input
            type="file"
            class="button"
            accept="image/*"
            style="
              margin-top: 15px;
              margin-left: 6px;
              border-radius: 5px;
              color: rgb(78, 78, 78);
              height: 7vh;
              width: 100%;
            "
          />
        </div>
      </div>
      <!-- more detail part -->
      <div style="display: flex; flex-direction: column; gap: 20px; margin-bottom: 3%">
        <label for="">More Details:</label>
        <input
          type="text"
          placeholder=""
          style="
            background-color: #a6ccd1;
            width: 100%;
            border-radius: 7px;
            height: 30vh;
            border: none;
          "
        />
      </div>
      <!-- add new opp button part -->
      <button
        style="
          padding: 20px;
          color: #f1f1f1;
          background-color: #0e163d;
          width: 100%;
          border-radius: 20px;
          height: 11vh;
          font-size: x-large;
          font-weight: 500;
        "
      >
        Add New Opportunity
      </button>
    </div>
  </div>
</template>
<style scoped>
@import url('../../../../assets/css/style.css');
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 48;
  color: white;
  margin-right: 50px;
}
button:hover {
  color: white;
}
</style>
