# [Heroku Friend-Finder App](https://friend-finder-rl.herokuapp.com/)

### Overview

In this activity, I built a compatibility-based "FriendFinder" application -- basically a dating app. The survey has 10 questions and users can answer each question on a scale of 1 to 5 based on how much the user agrees or disagress with a question.  This full-stack site takes in results from a user survey, then compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match.  This app was designed using Express to handle routing, and Heroku to deploy the app for users to access and complete the survey.  I deployed the following basic npm packages: `express`, `body-parser` and `path`.

### File Structure for App

Friend Finder's directories are organized as follows:

  ```
  FriendFinder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```

