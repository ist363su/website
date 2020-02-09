<template>
  <Layout>
      <v-row>
          <v-col v-for="week in $page.allWeekSchedule.edges" :key="week.node.id" md="4" sm="12">
      <v-card 
        class="mx-auto"
        max-width="344"
        outlined
    >
        <v-list-item three-line>
        <v-list-item-content>
            <div class="overline mb-4">Week {{ week.node.week }}</div>
            <v-list-item-title class="headline mb-1">{{ week.node.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ week.node.excerpt }}</v-list-item-subtitle>
        </v-list-item-content>

        </v-list-item>

        <v-card-actions>
        <g-link :to="week.node.path">View</g-link>
        </v-card-actions>
    </v-card>
          </v-col>
      </v-row>
  </Layout>
</template>

<page-query>
query {
  allWeekSchedule(sortBy: "week", order: ASC) {
    totalCount
    edges {
      node {
        id
        week
        title
        excerpt
        content
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: 'Weeks'
    }
  }
}
</script>
