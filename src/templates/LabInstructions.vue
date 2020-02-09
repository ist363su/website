<template>
<Layout>
  <div class="lab-intructions">
    <h2 class="accent--text">Lab {{ $page.labInstructions.lab }} step {{ $page.labInstructions.step }}</h2>
    <div class="lab-instructions-content" v-html="$page.labInstructions.content"></div>
    <div v-if="$page.labInstructions.start" class="actions next">
      <v-btn rounded color="secondary" :to="nextUrl" dark>Go to step {{ nextstep }} </v-btn>
    </div>
    <div v-if="$page.labInstructions.last" class="actions prev">
      <v-btn rounded color="secondary" :to="prevUrl" dark>Go to step {{ prevstep }} </v-btn>
    </div>
    </div>
    <div v-if="!$page.labInstructions.start && !$page.labInstructions.last" class="actions">
      <v-btn rounded color="secondary" :to="prevUrl" dark>Go to step {{ prevstep }} </v-btn>
      <v-btn rounded color="secondary" :to="nextUrl" dark>Go to step {{ nextstep }} </v-btn>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  labInstructions(id: $id) {
    id
    step
    lab
    title
    content
    path
    start
    last
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.labInstructions.title
    }
  },
  computed: {
    nextstep() {
      return this.$page.labInstructions.step + 1;
    },
    prevstep() {
      return this.$page.labInstructions.step - 1;
    },
    nextUrl() {
      return '/lab/' + this.$page.labInstructions.lab.toString() + '/' + this.nextstep.toString();
    },
    prevUrl() {
      return '/lab/' + this.$page.labInstructions.lab.toString() + '/' + this.prevstep.toString();
    }
  }
}
</script>

<style lang="scss">
.lab-instructions-content {
    position: relative;
    img {
      margin: 20px auto;
      max-width: 100%;
      display: block;
    }  
  }
</style>

<style lang="scss" scoped>
  .lab-intructions {
    width: 100%;
  }
  .actions {
    display: flex;
    flex: 1 1 auto;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    &.next {
      justify-content: flex-end;
    }
     &.prev {
      justify-content: flex-start;
    }
  }
  
  
</style>>
