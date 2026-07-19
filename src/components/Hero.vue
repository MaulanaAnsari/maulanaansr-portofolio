<template>
  <section class="main py-5">
    <div class="container py-5">
      <div class="row py-5">
        <div class="col-lg-6 py-5 mr-auto">
          <h3>
            <small>Hello, I'm</small> <br />
            Maulana Ansari
          </h3>
          <h6>FrontEnd Web Developer | Data Analyst</h6>
          <input type="button" value="My Resume" class="bt1 mt-5" />
          <!-- <a href="#contact" class="bt2 mt-5">Contact</a> -->
          <input
            type="button"
            value="Contact Me"
            class="bt2 mt-5"
            onclick="location.href = '#contact'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.main {
  background: url('/images/') center/cover;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 95vh;
}

.main h3 {
  font-size: 4.4rem;
  font-weight: 700;
}

.main h6 {
  font-size: 1.4rem;
  line-height: 1;
  text-transform: uppercase;
}

.main .bt1 {
  height: 55px;
  width: 138px;
  background-color: #2563eb;
  color: white;
  outline: none;
  border: none;
  font-weight: bold;
  border-radius: 5px;
}

.main .bt2 {
  height: 55px;
  width: 138px;
  background-color: transparent;
  color: #2563eb;
  outline: none;
  border: none;
  font-weight: bold;
  border-radius: 5px;
}
</style>
