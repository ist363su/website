<template>
  <Layout>           
    
   <h1>Welcome to IST 363!</h1>

   <p>This course will introduce students to emerging web technologies to create robust, 
     high quality front-end web interfaces. Students will learn advanced page layout and 
     styling techniques as well as responsive development and interactivity with JavaScript.</p>

    <h2>Classroom &amp; Meeting Times</h2>

    <p>Hinds Hall, Room 243 (ICEBOX II), Tuesday and Thursday 5:00 - 6:20pm</p>

    <h2>Office Hours</h2>

    <p>Office hour will be available immediately after class for 30 mins.</p>
    <p>Office hours will also be available Wednesday evenings from 7pm-9pm virtually by appointment.</p>

    <h2>Communication</h2>

    <p>Microsoft Teams is heavily used in communication for this course. Get help from the professor and your
      classmates through teams. You will find the code to join the team on blackboard
    </p>

    <h2>Learning Objectives</h2>

    <p>After taking this course, the students will be able to: </p>
    <ul>
      <li>Demonstrate the semantic meaning of HTML tags, HTML5 structural elements, ARIA roles and landmarks and how to better promote accessibility.</li>
      <li>Apply the Flex Box layout module to create advanced page layouts that are responsive and cross browser and platform compatible.</li>
      <li>Utilize advanced styling capabilities of CSS3 as they relate to typography, box properties, animations and transitions.</li>
      <li>Utilize JavaScript to add interactivity to promote user engagement.</li>
      <li>Experiment with JavaScript libraries and frameworks to handle events, initialize plugins, and interact with REST API's. </li>
    </ul>

    <h2>Book</h2>

    <p>Eloquent JavaScript – by Marijn Haverbeke. Available for free - 
      <a href="https://eloquentjavascript.net/" target="_blank">https://eloquentjavascript.net/</a></p>

    
    <Schedule />

  </Layout>
</template>

<script>

import Schedule from '@/components/Schedule';
export default {
  components: {
    Schedule
  },
  metaInfo: {
    title: 'IST 363'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
