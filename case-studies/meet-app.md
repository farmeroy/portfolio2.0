---
title: 'Meet App'
---



## Overview

“Meet-App” is a progressive web app that allows users to search for upcoming web-development workshops in their city, as well as view data related to what kind of events occur in which places. The events are loaded from Google Calendar API and the user also signs in with Google. The app features a serverless backend (AWS Lambda).

> ![meet app screenshot](/meet-app.png)

## Purpose/Context

This app was part of my full-stack certification at Career Foundry. The objectives of the app were to develop a PWA using a Test Driven Development approach, as well as learn the basics of AWS Lambda and Google OAuth. 

## Tools and Methodolgies
- Create React App
- AWS Lambda
- Google Calendar API
- Google OAuth
- Testing:

> - Puppeteer 
> - Enzyme
> - Jest
> - Cucumber

# Development
## Authorization
Meet App requires the user to access a Google Calendar. It was important to set up a simple yet scalable authorization approach: AWS Lambda. It was necessary to set up three serverless function to get the authorization URL, then request an access token, and finally fetch the events list from Google Calendar API. The testing process for this stage utilized a static testing site in which would interact with the serverless functions. It was key to properly test this stage to avoid more complicated debugging with the live app. 

## Test Driven Development on the Front End
After setting up our serverless functions, it was time to begin work on our app UI. The first step in this process was to convert the project brief into user stories. The user stories were then converted to unit tests written in Enzyme/Jest. Each story represented one feature of the UI, which I then built the bare minimum code for. For testing, I utilized a simplified set of mock-data. The unit tests were followed by inegration testing using enzymes ‘shallow’ method. After setting up the basic UI, I then proceeded to write integration tests to ensure the various components interacted properly. Finally I connected the serverless functions to my front end and ran end to end tests using puppeteer.  

## Final Touches
After setting up the basic functionality, I was informed we would have to add data visualization to the app. Using Chart.js, we added a scatter chart and a pie chart. Finally, a welcome screen was added and the app was styled using vanilla CSS.
Additionally, I used Atatus to test the coverage of the app in real life:
> ![atatus screenshot](/atatus-screenshot.png)

# Challenges
I faced several difficulties building this app at each step of the process. The first challenge was simply getting the serverless functions to work correctly. There was quite a bit of code and some of my variable names were too similar. I had many CORS errors that prevented authorization. In the end, I was able to carefully follow error message and console.logs to find some misspelled and misused variables. This reinforced the necessity of setting up the static testing site, as well as the necessity for intelligently choosing variable names. 
A second challenge was adding the charts and welcome page after completing the rest of the app. This is because, in order to style the charts I needed to develop locally, yet whenever I went to view my app, the welcome screen would send me to the live version. In the end, I had to create a Git branch for local development that disabled the Google OAuth feature, and instead utilized the local mock data. Afterwards, I merged my styles into the master branch to deploy

# Conclusion
Building an app using TDD is an excellent way to ensure all processes are running. I enjoyed the structure it gave my development process. In addition, working with AWS and Google OAuth was very rewarding and I look forward to using those services in other apps. 

## Credits
- Lead Developer: Raffaele Cataldo
- Project Brief: Career Foundry
- Code Review: Blaise Bakundukize and Nizar Triki

