<template>
  <Layout>
    <h1>Course Project (380pts Total)</h1>
    <p>The course project is a full semester project. You will begin by dreaming up an idea, and
      developing a project proposal. Once the proposal has been accepted you will then wireframe
      out your idea. This will give you an idea of how you project will look and let you work 
      through the flow of your application before you start coding. After the wireframes have
      been worked through you will code version 1 of you application, this will be your midterm
      project grade. Version 2 will be an enhanced version of your project and will be submitted
      for your final project grade.</p>

      <p>Project Requirements:</p>

      <ul>
        <li>Your project idea should be an interactive application, not just a static website</li>
        <li>Your project should include most of the skills and techniques taught throughout the semester</li>
        <li>Your project should be innovative, think big! The web is capable of almost anything
          today. The fun will be discovering what you can accomplish!</li>
      </ul>

      <p>What you can do: </p>
      <ul>
        <li>Write your own code, you may use code from other sources or tutorials as login
          as credit and a link in given in the form of a code comment
        </li>
        <li>You may use a UX framework, such as Bootstrap, Foundation, Tailwind etc</li>
        <li>You may use JavaScript libraries available on NPM or other sources</li>
        <li>You may use design influence from other applications, BUT YOU MAY NOT COPY. 
          please list sources of influence in code comments</li>
        <li>Work together, getting help from other programmers is a big part of application
            development, help is OK, copying is NOT</li>
        <li>Use icon libraries, images (with copyright release)</li>
      </ul>

      <p>What you can't do: </p>
      <ul>
        <li>Use a complete template, free or purchased, starter templates are OK.</li>
        <li>Copy a tutorial that shows you how to create an application, using tutorials to
          build a feature of your application is ok, copying your entire project from a step by step 
          tutorial is not.
        </li>
      </ul>

      <h2>Project Proposal (30pts)</h2>
      <p>Submit one page project idea to Blackboard, think big! there
        are lots of tools out there to help you achieve your goals, we will work together
        throughout the semester to build something amazing!</p>
        <p>The professor will provide feedback on your idea and make sure your project has 
        the ability to satisfy all the requirements for the best grade possible.</p>
        <p>Your proposal should include a list of any datasources and functionality you may need.
          Ex: My project will need a database to store... or my project will need a way to login users.
        </p>


      <h2>Project Wireframe (50pts)</h2>
      <p>Your wireframe will be your first pass at how your project will function. The wireframe
        will include the layout of your application, and the flow and screens of how your
        application will work. This can be completed using Adobe XD, Figma, or a tool of your
        choice. Submit a PDF of the design to blackboard.</p>

      <h2>V1 of your Application (The Midterm, 100pts)</h2>
      <p>This will be your first pass at your project using the skills and tools taught in class.
        Most of this version will be a static website, focused more on layout and desing, with
        very minor user interaction (mostly navigation, hover effects, etc).        
      </p>
      <p>Version 1 should satisfy the follow criteria</p>
      <ul>
        <li>Your application should be in line with your proposal and reflect your wireframe</li>
        <li>Your application should be a static version of your application, 
          with all completed pages of your wireframe</li>
          <li>Navigation should work</li>
          <li>You application should work and look good on all devices using responsive design</li>
          <li>Hover effects and animations should be utilized to enhance user experience</li>
          <li>You application should include all forms to satisfy you applications requirements</li>
          <li>Your application should follow accessability best practices</li>
          <li>You application should pass HTML validation</li>
          <li>CSS and JS should be in separate files</li>
          <li>Hosted on github pages</li>
      </ul>

      <h2>Project Update (30pts)</h2>
      <p>A one page document, detailing the plan to get to version 2 of your project. This should
        include possible libraries, data sources, apis or services that will be used to reach
        version 2 of your application. This should also incorporate feedback provided by the professor
        from version 1 of the application.
      </p>

      <h2>Version 2 of your Application (The Final Project, 170pts)</h2>
      <p>This is when your application comes to life! Utilizing the skills taught in the second half
        of the semester, you will add all the features required to make you application work. </p>
       <p> <b>WARNING:</b> you may need to rewrite significant parts of your first version to accomplish 
        your final vision</p>

      <p>Version 2 should satisfy the follow criteria</p>
      <ul>
        <li>Incudes all of the requirements from version 1</li>
        <li>All features should work, this includes utilizing all required APIs, databases,
          user authentication, etc</li>
        <li>JavaScript should be written in a separate file</li>
        <li>Utilize advanced JavaScript taught in class</li>
      </ul>


      <h2>Application Ideas</h2>

      <ul>
       <li> Fitness Activity Application - 
          Allows users to login and record fitness activity, also record nutrition facts. 
          (Google Fit integration, authentication)</li>

        <li>A Recipe App - Allows users to post and review recipes. (Integrate with recipe/nutrition data)</li>
        <li>A book database - Allow users to post books they have read with reviews, create reading lists. 
          (Integrate with amazon to make some extra cash!)</li>
        <li>An expenses tracker - Log expenses, tag them (or have categories), List expenses, 
          Have a few graphs (last month / last year). Store the data somewhere</li>
        <li>Check out this, <a href="https://flaviocopes.com/sample-app-ideas">https://flaviocopes.com/sample-app-ideas</a> for more!</li>
      </ul>


      
  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Course Project'
    }
  }
</script>
