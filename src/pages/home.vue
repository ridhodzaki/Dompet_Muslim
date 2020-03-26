<template>
  <q-page
  class="q-pa-md bg-light-green-12">
    <q-card bordered
      class="style-top"
      >
      <q-card-section>
      </q-card-section>
    </q-card>

    <br>
    <q-card bordered
      class="style-md q-pa-md"
      >
      <q-card-section>
      </q-card-section>
    </q-card>

    <q-card bordered class="q-ma-md"
     >
      <q-card-section>
        <div class="column">
          <div class="row q-my-md">
              <q-btn<img
              src="statics/bpjs.png"
              style="height: 90px; max-width: 90px"
              clickable
              to="/bpjs"
              >/>
              <q-space/>
              <img
              src="statics/isisaldo.png"
              style="height: 90px; max-width: 90px"
              >
              <q-space/>
              <img
              src="statics/pulsa.png"
              style="height: 90px; max-width: 90px"
              >
          </div>
          <div class="row">
              <img
              src="statics/tokenlistrik.png"
              size="12px"
              style="height: 90px; max-width: 90px"
              >
              <q-space/>
              <img
              src="statics/terimauang.png"
              style="height: 90px; max-width: 90px"
              >
              <q-space/>
              <img
              src="statics/kirimuang.png"
              style="height: 90px; max-width: 90px"
              >
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="scss">
  .style-top {
    opacity: 0.9;
    height: 500px;
  }
  .style-md {
    opacity: 0.9;
    height: 200px;
  }
  .style-node {
    opacity: 0.9;
    height: 200px;
  }
</style>
