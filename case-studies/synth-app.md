---
title: 'Synth-App'
---

## Overview

**Synth-App** is a 
Users can 

The frontend is built with 

![synth-app screenshot](/synth-app.png)

## Purpose/Context


## Tools and Methodologies

### Recoil

### Tone.js


# Development

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
## Tone.js

## Recoil
Another challenge I faced was how to handle hashing on the server. I read in the Bcrypt docs that I should use their asynchronous hashing method for hashing in the browser. 
However, I soon began receiving intermittent type errors when logging in. By following the error messages, I realized the async hash method was returning a promise. I solved this problem by switching to the synchronous version of their hashing function.

# Conclusion
This was an extremely satisfying process. I was suprised to learn how much I like working from the command line. I always imagined I was more of a design focused front end developer, but setting up endpoints and dealing with redux were my favorite parts of this project. This has given me a strong desire to learn more backend. I also now do most of my computing from the command line. 
Additionally, I learned that I do *really* enjoy working with React.
Working with component libraries, such as Bootstrap or MUI, has reinforced to me how powerful React can be.


## Credits
- Lead Developer: Raffaele Cataldo
