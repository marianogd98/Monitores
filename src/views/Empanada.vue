<template>
  <div>
    <b-carousel v-if="dataMonitor.length!=0"
      id="carousel-1"
      v-model="slide"
      :interval="34000"
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
     
    >
      <!-- Slides with custom text -->
      <b-carousel-slide :img-src="'img/'+dataMonitor.imagen">
        <table>
          <tr>
            <td>
              <div class="mt-7" style="height: 3em">
                <span><h2 class="titulo">{{dataMonitor.slug | upText}}</h2></span>
              </div>
            </td>
          </tr>
          <tr><td></td><td><h2 class="ref">{{dataMonitor.moneda}}</h2></td></tr>
          <tr v-for="p in dataMonitor.productos" :key="p.id">
            <td>
              <div class="row ml--10">
                <h4 class="producto">{{p.descripcion}}</h4>
              </div>
              <div class="row mt--3 ml--4">
              </div>    
            </td>
            <td>              
              <h1>
                <b-button class="precio mt--3" variant="secondary">
                   {{(p.PrecioOferta)?((p.PrecioOferta>0)?p.PrecioOferta:p.precioDetal):p.precioDetal  | moneda}}
                  <b-badge v-if="(p.PrecioOferta)?p.PrecioOferta>0:false" pill variant="danger t--3 l-3 h4">OFERTA<i class="fas fa-tag"></i></b-badge>
                </b-button>
              </h1>
            </td>
            <td width='40%'>
              <div class="row"></div>
            </td>
          </tr>
        </table>
      </b-carousel-slide>    
    </b-carousel>    
    <div v-if="dataMonitor.length==0">
      <b-img src="img/loading-gif-png-4.gif" style="max-width: 50%; height: auto;" fluid alt="Responsive image"></b-img>
    </div>  
  </div>
</template>

<script>

import axios from 'axios'

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
        await axios.get(this.$gate.getApiUrl()+"monitor/empanada").then(({ data }) => {
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

h4,.h4{
  font-size: 1.5rem !important; 
  border-radius: 0.75em !important;
  font-family: 'Montserrat', sans-serif;
}

.mt-3 {
  margin-top: 5em !important;
}

.mt-5 {
  margin-top: 7.5em !important;
}

.mt-7 {
  margin-top: 8.75em !important;
}

.mt--3 {
  margin-top: -.5em !important;
}

.mt--4 {
  margin-top: -1em !important;
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

.ml--5{
  margin-left: -4em !important;
}

.ml--10{
  margin-left: -8em !important;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.ref {
  font-size: 48px;
  /* text-transform: uppercase; */
  letter-spacing: 2px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #e0a800;
  display: inline-block;
  position: relative;
  letter-spacing: 4px; 
}

td, th {
  border: 0px;
  text-align: left;
  padding: 10px;
}
.carousel-caption {
    position: absolute; 
    right: 15%;
    top: 125px; /* Cambiar bottom por top y los p??xeles que necesites */
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
    /*background-color: rgba(0, 0, 0, 0.5);  A??adir para conseguir el fondo con opacidad */
}
.titulo {
    font-size: 175px;
    margin-top: -0.75em;
    letter-spacing: 2px;
    font-style: italic;
    text-transform:none !important;
    font-family: philosopher;
    font-weight:400;
    color: #e0a800;
    display: inline-block;
    position: relative;
    letter-spacing: 4px; 
}
.producto {
  font-size: 84px !important;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif !important;
  color: #fff;
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
 font-size: 74px !important;
 font-weight: bold;
 font-family: 'Montserrat', sans-serif !important;
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