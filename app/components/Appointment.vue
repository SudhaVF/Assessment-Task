<template>
  <section class="appointment-section">
    <div class="left-section">
      <h2>WE COMPLETE WELDING &<br />METAL PROJECTS IN TIME</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue,
        iaculis id elit eget, ultrices pulvinar tortor.
      </p>

      <div class="info-box">
        <div class="icon-text">
          <i class="bi bi-geo-alt text-dark fs-3"></i>
          <span><strong>OFFICE ADDRESS</strong></span>

        </div>
        <p>123 Street, New York, USA</p>
        <hr></hr>
        <div class="icon-text">
          <i class="bi bi-clock text-dark fs-3"></i>
          <span><strong>OFFICE TIME</strong></span>
        </div>
        <p>Mon–Sat 09am–5pm, Sun Closed</p>
      </div>
    </div>

    <div class="right-section">
      <h2>ONLINE APPOINTMENT</h2>
      <form class="form-box">
        <div class="form-row">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
        </div>
        <div class="form-row">
          <input type="text" placeholder="Your Mobile" />

          <select>
            <option>Choose A Service</option>
            <option>Steel Welding</option>
            <option>Metal Fabrication</option>
          </select>
        </div>

        <textarea rows="4" placeholder="Message"></textarea>

        <button type="submit">SUBMIT NOW</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppointmentPage",
};
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css');

.appointment-section {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  z-index: 1;
}


.appointment-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url('/images/carousel-2.jpg');
  background-size: cover;
  background-position: center;
  filter: brightness(0.3);
  z-index: -1; 
}


.left-section {
  flex: 1;
  color: white;
  padding: 40px;
}

.left-section h2 {
  font-size: 28px;
  margin-bottom: 20px;
  font-family: "Roboto", sans-serif;
}

.left-section p {
  margin-bottom: 10px;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 11px;
  
}

.info-box {
  margin-bottom: 20px;

}
hr{
  height: 1px;
  border: none;
  background-color: #ada1a1;
}

.info-box p {
  font-family: "Poppins", sans-serif;
  margin: -18px 0 0 0;
  position: relative;
  top: 6;
  display: flex;
  align-items: flex-start; 
  gap: 2px;
  margin-left: 45px;
  padding-bottom: 20px;
}


.icon-text {
  display: flex;
  align-items: flex-end;
  gap: 5px;
  /* margin-bottom: 5px; */
  font-family: "Roboto", sans-serif;
}

.icon-text i {
  background-color: white;
  color: black;
  padding: 5px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
}

.icon-text span {
  padding-bottom: 18px;
  margin-bottom: 4px;
}

.right-section {
  flex: 1;
  background-color: #fff;
  padding: 30px;
  color: #222;
  margin-top: 50px;
  margin-right: 60px;
  margin-left: 20px;
  /* margin-bottom: 40px; */
}

.right-section h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-row {
  display: flex;
  /* flex-direction: column; */
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.form-row input {
  flex: 1;
  min-width: 100px;
  height: 30px;
  background-color: #dfdbdb;
  border: none;
}

.form-row select {
  flex: 1;
  min-width: 100px;
  height: 35px;
  background-color: #dfdbdb;
  border: none;
  color: #797672;
}

.form-box textarea {
  margin-top: 20px;
  padding: 10px;
  background-color: #dfdbdb;
  width: 400px;
  border: none;
}

.form-box button {
  padding: 12px;
  background-color: #b3861e;
  color: #fff;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  width: 420px;
}

.form-box button:hover {
  /* background-color: black; */
  color: black;
}
</style>