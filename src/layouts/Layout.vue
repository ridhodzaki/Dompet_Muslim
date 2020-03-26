<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white">
      <q-toolbar>
        <q-btn
          class="bg-light-green-13"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          <header
          style="color: black">Dompet Muslim</header>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        content-class="bg-grey-1"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item
              v-for="nav in navs"
              :key="nav"
              :to="nav.to"
              clickable>
              <q-item-section avatar>
                <q-icon :name ="nav.icon"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ nav.label }}</q-item-label>
              </q-item-section>
              </q-item>

            <q-item
              to="/"
              exact
              clickable>
              <q-item-section avatar>
                <q-icon name ="directions_run"/>
              </q-item-section>
              <q-item-section>
                <q-item-label> Logout </q-item-label>
              </q-item-section>
              </q-item>
                </q-list>
              </q-scroll-area>

            <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
              <div class="absolute-bottom bg-transparent">
                <q-avatar size="56px" class="q-mb-sm">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
                <div class="text-weight-bold">Ridho Dzaki S</div>
                <div>@RikiKun</div>
              </div>
            </q-img>
      </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <q-tabs>
        <q-route-tab
        class="bg-white"
        v-for="nav in navs" v-bind:key="nav.label"
        :to="nav.to"
        :icon="nav.icon"
        :label="nav.label"
        style="color: #76ff03"/>
      </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Home',
          icon: 'home',
          to: ''
        },
        {
          label: 'Profile',
          icon: 'person',
          to: '/input'
        },
        {
          label: 'Task',
          icon: 'insert_invitation',
          to: '/task'
        },
        {
          label: 'Todo',
          icon: 'assignment',
          to: '/todo'
        }
      ]
    }
  }
}
</script>
<style>
  @media screen and (min-width: 800px) {
    .q-footer {
      display: none;
    }
  }

</style>
