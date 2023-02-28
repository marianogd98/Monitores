<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="34000"
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
     
    >
      <!-- Slides with custom text -->
      <b-carousel-slide img-src="img/rio-menu/rio-menu-1.png">
      </b-carousel-slide>
    </b-carousel>    
  </div>
</template>

<script>
export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        dataMonitor:[]
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      async loadData(){
        await axios.get("http://172.22.0.14:8304/api/monitor/rio/menu").then(({ data }) => {
          this.dataMonitor = data.data; 
          console.log(this.dataMonitor)
        });
      }
    },
    mounted(){
      this.loadData();
    }
}
</script>

<style>
.h1{
  font-size: 2.5rem !important; 
  font-family: 'Montserrat', sans-serif;
}

.h2{
  font-size: 2rem !important; 
  font-family: 'Montserrat', sans-serif;
}

.h4{
  font-size: 1.5rem !important; 
  border-radius: 0.75em !important;
  font-family: 'Montserrat', sans-serif;
}

.t--3 {
  top: -1.5em !important;
}

.t--6 {
  top: -4.25em !important;
}
.l-6{
  left: 3.5em !important;
}
.l-3{
  left: 2em !important;
}
.ml--3{
  margin-left: -2em !important;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 0px;
  text-align: left;
  padding: 10px;
}
.carousel-caption {
    position: absolute; 
    right: 15%;
    top: 125px; /* Cambiar bottom por top y los píxeles que necesites */
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
    /*background-color: rgba(0, 0, 0, 0.5);  Añadir para conseguir el fondo con opacidad */
}
.titulo {
    font-size: 150px;
    margin-top: -0.75em;
    letter-spacing: 2px;
    font-style: italic;
    text-transform:none !important;
    font-family: philosopher;
    font-weight:400;
    color: #fff;
    display: inline-block;
    position: relative;
    letter-spacing: 4px; 
}
.producto {
  font-size: 3em !important;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 700;
  color: white;
  display: inline-block;
  position: relative;
  letter-spacing: 4px; 
}
.marca {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 700;
  color: #e0a800;
  display: inline-block;
  position: relative;
  letter-spacing: 4px; 
}

.precio{
 font-size: 1.1em !important;
 font-weight: bold;
 width: 3em !important;
 height: 2em !important;
}

.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out; }
  .bg-white {
  background-color: #fff !important; }
</style>