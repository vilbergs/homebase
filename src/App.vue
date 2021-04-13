<template>
<<<<<<< HEAD
  <div>
    <ZoneCard title="Sovrum" />
  </div>
</template>

<script setup>
import BarChart from "./components/BarChart.vue";
import ZoneCard from "./components/ZoneCard.vue";
</script>
=======
  <nav>
    <h1>Navigation</h1>
    <p>
      The navigation is in our root component (App), so it will be rendered on
      every route!
    </p>
    <ul>
      <!-- use the router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
      <li>
        <router-link to="/">Dashboard</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
    </ul>
  </nav>

  <section class="view">
    <p>
      Our views are rendered with <code>router-view</code> depending on what
      route we are on...
    </p>
    <p>
      So "/" will take us to the Dashboard component and "/login" will take us
      to the Login component!
    </p>
    <router-view></router-view>
  </section>
</template>

<script setup></script>
>>>>>>> dcc44f6193268151e73d77ea5f8967cda41f88a1

<style>
ul {
  width: fit-content;
}

.view {
  border: 1px solid grey;
  padding: 10px;
}
#app {
<<<<<<< HEAD
  font-family: "Lato", Avenir, Helvetica, Arial, sans-serif;
=======
  font-family: 'Lato', sans-serif;
>>>>>>> dcc44f6193268151e73d77ea5f8967cda41f88a1
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: space-evenly;
}
</style>
