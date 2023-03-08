---
title: 'Pre-Code Flix'
---

## Overview

**Pre Code Flix** is a full-stack web app that allows users to create an account, log in, and browse a database of early Hollywood films. Users can like and unlike films, as well as read more about the genres and directors, and find other movies that might match their interests. 

The frontend is built with React, and the back end is an Express.js REST API that accesses a non-relational database (MongoDB).

![pre-code flix screenshot](/movie-app.png)

## Purpose/Context

This app was part of my full-stack certification at Career Foundry. The objectives were to build a REST API, a non-relational database, and a front end with React. 
I chose to focus the app on a period of cinema known as Pre-Code. Before 1934, Hollywood cinema had no rating system and many movies were produced that religious and politcal leaders found qustionable, but that lead to many great movies being produced. In 1934 the 'Hayes Code' was established and the Hollywood studios began to self-censor. I thought it would be interesting to focus on this early, often forgotten period. 

## Tools and Methodologies

### Front End
- React
- Parcel
- React-Router (v6)
- React Bootstrap
- Redux

### Back End
- Express
- Mongoose
- Bcrypt
- Passport 

### Documentation
- JSDocs

![backend screenshot](/api-screenshot.png)

# Development
## The Database
This project began by setting up a database. I spent some time experimenting with PostGres before deciding to use MongoDB. This decision was informed by the fact that the exact contents of each movie or user wouldn't be predictable, and I wanted to have the flexibility to add fields to some movies/users without completely restructuring my database.
Building the database began in my command line with MongoShell. The database remained local through testing of the API, after which point I pushed it to my MongoDB account. 
Throughout this process I fell in love with working in the terminal and used some spare time to get used to various Bash commands. 

## The Restful API 
Development of this API began with defining the features and expectations of each endpoint as user stories. Following this, I wrote the endpoints in Express. Testing began with Postman. I really enjoyed this part of the process. Settng up the Models, the endpoints, and the authorization methods was challenging and rewarding. Setting up JWT authorization and hashing with Bcrypt was particularly interesting -- and lead to many issues that had to be debugged later. 

![Postman Screenshot](/post-new-user.png)

## The Front End 
I had built react apps with Create React App in the past, but for this project I built a React app without an additional framework. Setting up parcel and the build environment was the first step.
Following this, I began with a mock data set to render the main view of the movie database.
I added React Router to allow different views, and had to incorporate forms for the sign in and user update views.
To give user feedback, I added a custom hook to ensure all form fields were filled. 
Developing the Redux store to ensure state was organized app-wide was one of the pleasures of this process.
Finally, using React-Bootstrap to allow conistent styling was a key part of the frontend responsiblities. 


## Final Touches
There is still work to be done on this app. I would like to add a youtube player, as many of these films are in the public domain and viewable on youtube. There are other button styling other other design points that I continue to work on.

# Challenges
## Package Versions 
When I began this project, the project brief included directions for using Parcel and React Router, but these instructions both referred to older versions of these packages that had been deprecate and were no longer supported.
I had to make the decision whether I should follow along with the instructions that used unsupported package versions, or to use the current versions but with no support from the course materials. 
I decided that for the longevity and maintenance of my project, I would prefer to use the current versions.
This presented a challenge particularly with React Router.
I had already written most of my React app as class components at this point. In order to switch to React Router v6, I realised that I would have to refactor all of my components as functional components. This is because React Router v6 uses hooks. 
Once I had done that, I simply followed the official Docs to set up the rest of my routing. 

## Bcrypt
Another challenge I faced was how to handle hashing on the server. I read in the Bcrypt docs that I should use their asynchronous hashing method for hashing in the browser. 
However, I soon began receiving intermittent type errors when logging in. By following the error messages, I realized the async hash method was returning a promise. I solved this problem by switching to the synchronous version of their hashing function.

# Conclusion
This was an extremely satisfying process. I was suprised to learn how much I like working from the command line. I always imagined I was more of a design focused front end developer, but setting up endpoints and dealing with redux were my favorite parts of this project. This has given me a strong desire to learn more backend. I also now do most of my computing from the command line. 
Additionally, I learned that I do *really* enjoy working with React.
Working with component libraries, such as Bootstrap or MUI, has reinforced to me how powerful React can be.


## Credits
- Lead Developer: Raffaele Cataldo
- Project Brief: Career Foundry
- Code Review: Blaise Bakundukize and Nizar Triki
