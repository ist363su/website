<template>

      <v-container
        fluid
        fill-height
      >
        
          <slot></slot>
      </v-container>
    
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: true,
    }),
  }
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}


h1,h2,h3,h4,h5,p {
  width: 100%;
}

pre {
   width: 100%;
}
code {
  padding: 10px;
  color: white !important;
  background-color: black !important;
}

h4 {
  margin-bottom: 5px;
}

h2, h3 {
  margin-top: 20px;
}

p, pre {
  margin-bottom: 10px;
  margin-top: 10px;
}

.nav__link {
  margin-left: 20px;
}

ul {
  margin-bottom: 1em;
}
</style>
