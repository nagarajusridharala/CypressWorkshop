# CypressWorkshop
Test code

1) Install node js - https://nodejs.org/en/download
2) Install Visual Studio ide - https://code.visualstudio.com/download
3) Create workspace and name it. ex: CypressWorkspace
4) Open command promt in visual studio and type command below command (this is similarly like pom.xml, provide details like package name, version etc)
  ---> npm init 
5) Now install cypress in our work space using below command (command '--save-dev' saves the dependencies in package.json)
  ---> npm install cypress --save-dev
6) Open cypress using below command
  ---> npx cypress open
7) Create a test under examples folder, for the given task i have created Test case in file - CypressTest1.js
8) In Cypress Runner click on the CypressTest1.js, it will execute the test case.

Challenges:
a) Problem: By default window size is 1000x660, hence test execution failes. 
   Solution: in cypress.json file, add these lines "viewportWidth": 1366,
    "viewportHeight": 768,
b) problem: Due to the web security, not able to click on the hyperlink and throws 405 error. 
   Solution: Add this linke "chromeWebSecurity": false into cypress.json then issue resolved and i am able to run the scripts.
