// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'IST 363 - Advanced Web Development',
  siteUrl: 'https://IST363-Spring-2020.github.io',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'WeekSchedule',
        path: './content/week/**/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'LabInstructions',
        path: './content/labs/**/*.md',
      }
    }
  ],
  templates: {
    WeekSchedule: '/week/:week',
    LabInstructions: '/lab/:lab/:step'
  }
}
