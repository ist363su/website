 <template>
 <div>
    <h2>Schedule</h2>
    <v-simple-table>
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-left">Week</th>
            <th class="text-left">Tuesday</th>
            <th class="text-left">Thursday</th>
            <th class="text-left">What's Due (By Saturday)</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in weeks" :key="item.name" @click="navigateToWeek(item)">
            <td>{{ item.week }}</td>
            <td>{{ item.tuesday }}</td>
            <td>{{ item.thursday }}</td>
            <td>{{ item.due }}</td>
            </tr>
        </tbody>
        </template>
    </v-simple-table>
 </div>
  </template>

<style scoped>
  tr {
    cursor: pointer;
  }
</style>

<script>
  export default {
      data() {
          return {
              weeks: [
                  {
                    week: "01",
                    tuesday: "Course Introduction",
                    thursday: "263 Review",
                    readings: [{
                        text: "html",
                        link: ""
                    }],
                    due: "Class Survey"
                  },
                  {
                    week: "02",
                    tuesday: "HTML / CSS Review",
                    thursday: "CSS Selectors",
                    readings: [{
                        text: "html",
                        link: ""
                    }],
                    due: "Lab 1"
                  },
                  {
                    week: "03",
                    tuesday: "Flexbox",
                    thursday: "Media Queries",
                    readings: [{
                        text: "html",
                        link: ""
                    }],
                    due: "Lab 2 / Project Proposal"
                  },
                  {
                    week: "04",
                    tuesday: "CSS Transitions",
                    thursday: "CSS Animations",
                    readings: [{
                        text: "html",
                        link: ""
                    }],
                    due: "Lab 3"
                  },
                  {
                    week: "05",
                    tuesday: "Sending Data with HTML",
                    thursday: "HTML Forms and Inputs",
                    readings: [{
                        text: "html",
                        link: ""
                    }],
                    due: "Lab 4"
                  },
                  {
                    week: "06",
                    tuesday: "Intro To JS / Types / Variables",
                    thursday: "JavaScript Control Flow",
                    readings: [{
                        text: "html",
                        link: ""
                    }],
                    due: "Lab 5 / Project Wireframes"
                  },
                  {
                    week: "07",
                    tuesday: "JavaScript Functions",
                    thursday: "Javascript Objects and Arrays",
                    readings: [{
                        text: "html",
                        link: ""
                    }],
                    due: "Lab 6"
                  },
                  {
                    week: "08",
                    tuesday: "JavaScript and the Browser / DOM",
                    thursday: "Javascript Events",
                    readings: [{
                        text: "html",
                        link: ""
                    }],
                    due: "Lab 7"
                  },
                  {
                    week: "09",
                    tuesday: "MidTerm Workshop",
                    thursday: "MidTerm Workshop",
                    readings: [{
                        text: "html",
                        link: ""
                    }],
                    due: "V1 of your Project (Before Spring Break)"
                  },
                  {
                    week: "10",
                    tuesday: "JavaScript Forms",
                    thursday: "Ajax / APIs / Axios",
                    readings: [{
                        text: "html",
                        link: ""
                    }],
                    due: "Lab 8"
                  },
                  {
                    week: "11",
                    tuesday: "Canvas",
                    thursday: "NodeJS",
                    readings: [{
                        text: "html",
                        link: ""
                    }],
                    due: "Lab 9 / Project Update"
                  },
                    {
                    week: "12",
                    tuesday: "ReactJS I",
                    thursday: "Build Tools",
                    readings: [{
                        text: "html",
                        link: ""
                    }],
                    due: "Lab 10"
                  },
                   {
                    week: "13",
                    tuesday: "ReactJS",
                    thursday: "ReactJS",
                    readings: [{
                        text: "html",
                        link: ""
                    }],
                    due: "Lab 11"
                  },
                  {
                    week: "14",
                    tuesday: "Final Project Workshop",
                    thursday: "Final Project Workshop",
                    readings: [{
                        text: "html",
                        link: ""
                    }],
                    due: ""
                  },
                  {
                    week: "15",
                    tuesday: "Final Project Demos",
                    thursday: "",
                    readings: [{
                        text: "html",
                        link: ""
                    }],
                    due: "V2 of your project"
                  },
              ]
          }
      },
      methods: {
        navigateToWeek(item) {
          this.$router.push('/week/'+item.week);
        }
      }
    
  }
</script>