---
title: 'Accessibility Quiz'
---

>"Raffe went over and above, creating an entirely new product for my website users. 
>
>As someone from a non-technical background, it was really important to have someone that could communicate with me in a non-technical way, explaining things simply and helping me to do what I needed to do to get the quiz page live. 
>
>He was collaborative, worked professionally, and delivered everything on time. I really appreciated his insights and advice which helped add additional things to the initial brief. Not only did he help me to create a quiz site and score, he also created a CMS and data too. 
>
>The project has culminated in an accessible, user-friendly quiz that helps my customers to establish where they are on their accessibility journey. I am also able to make changes to this, and gain insights on each and every question, so I know what challenges are being faced time and time again. This will inform how my business grows and expands. 
>
>I couldn't have hoped for anything better!"
> 
>\- Alice Hargreaves (CEO of Sick in the City)

# Overview
This was a project for UK non-profit [Sick in the City](https://sicofficial.co.uk). 
This is a full stack app that contains a user facing quiz, an admin dashboard, and a database containing quiz questions, answers, feedback, and web analytics.

For the quiz, users answer a series of survey questions regarding their workplace,
receive a score and feedback,
with a call to action to email Sick in the City for a consultation.

The dashboard includes simple web analytics, 
visualization of survey responses,
and a basic CMS to updtate the quiz questions and
results feedback.

The dashboard is secured with NextAuth and 
the database used is MongoDB.

![example of quiz questions](/sic-questions-example.png)
![example of quiz feedback](/sic-results.png)

# Purpose/Context

They had produced a PDF quiz that they could send to potential clients
to score their workplace accessibility, 
but they really wanted something that was online and easily shareable.

Based on the original PDF, I made a simple single page application
that provided a list of accessible checkboxes, calculated the score,
and provided an email link to get in touch.


I then discussed with Alice (the CEO) about taking it a bit further,
adding an email form that would also share the quiz results with her,
and eventually adding a database to store the results and an admin
dashboard view where she could get some basic analytics regarding
client answers, as well as some simple web analytics.

# Development

## Tools and Methodologies
- React/TypeScript
- Next.js - full stack capablities
- NodeMailer - for sending emails
- NextAuth - for securing the dashboard
- Tailwind - for styling
- Recharts - for data visualization
- MongoDB - for data 
- Prisma - a strongly typed ORM
- Netlify - for free hosting

## Building for Maintainability
I knew I would be leaving Alice with a lot of code she couldn't maintain herself and had a view that whatever I built should be easy to work with for a future developer.

The first choice I had was 
deciding *where* to build it.
The Sick in the City website is hosted on Squarespace,
and I originally considered building the app
within the Squarespace ecosystem.
However, I knew in some ways this would 
limit what I was able to do,
and Alice mentioned to me that they will eventually
transition off of Squarespace.

I decided to do a first iteration using React and Vite.
React is a great choice for single page web apps and in the future,
if Sick in the City needed to find another developer to update the page, it's a popular framework.

I chose Vite at first to keep things simple, as I didn't expect any back end functionality.

I chose TypeScript because I feel it increases maintainability through its type system.

I also chose to style with Tailwind as it is a popular CSS library, quick for iteration, and doesn't have the complexity of using a component library.

In general, throughout development my choices were influenced by keeping dependencies minimal.

## Building a Back End with Next.Js
After initial development, I had a few concerns:
- How could the content be easily updated?
- How could they have an easy overview of survey responses?
- Could the user share their results with the company easily?
- How would we know if *anyone* was viewing the website?

I proposed that I build a database and simple dashboard that would allow for a basic web analytics,
as well as storing answers to the quiz questions for analysis,
and an eventually basic content management system so that they could independently update the quiz as necessary,
without my involvement. 

To accomplish this, I ported the project to Next.js

## Contact form and sharing the results
Alice requested that when the user emails here,
the results of the data are shared with her.

To make this happen, I built a contact form.
When the user submits the form, 
I collect the quiz answers on the backend
and format them nicely in an HTML email,
sending the users quiz results, contact information,
and message to Sick in the City using the 
Nodemailer package.

Of course, with any form it is important to 
do validation on the client side for good user 
experience, which you can see below.
I also validate all data on the backend.

![contact form](/sic-contact-form.png)
![contact form](/sic-contact-form-error.png)


## Modeling the Data: MongoDB and Prisma
I chose MongoDB because it is easy to set up a free database on their platform. I chose Prisma as an ORM because I had used it in my job at WithEncore and found it's models to be easier to work with than Mongoose.
Prisma allows for strongly typed models and also manages relations in MongoDB very well, making it almost like a relational database.

## Web analytics
My first priority was basic web analytics.
It is so useful to know if people are viewing your site.
I decided on three data points to collect:
- someone visits the site
- someone completes the quiz
- someone contacts the company

I felt this would give a good overview of how users are interacting with the site, 
without collecting any data or storing cookies.

This was easily accomplished by sending a time stamp to the database throughout the various points in the quiz flow.

## Quiz Results Data
Although the quiz results are shared in an email, 
we decided it would be great to be able to view
the results in aggregate. 
Also, saving the results to a database
would allow the company to download all the data
at some point for statistical analysis.

To accomplish this, 
I first created a model for each quiz section,
a model for each item (question) of the section,
and finally an `Answer` model that relates
back to the `QuizSectionItem`. 

The Answers are sent to the database when the final score is calculated.

To display the answers,
I fetch all answers from the database (using server side rendering in Next.js), according to question and display them according to quiz section.

I used Recharts, an open source react package based on SVGs, to display all data. 

![web analytics](/sic-analytics.png)

## Custom CMS
I created basic CMS for updating the content of the quiz as well as the feedback. 

![basic CMS view](/sic-questions-cms.png)

## NextAuth
In order for the admin dashboard to go live,
I had to consider authentication and authorization.
The obvious choice was NextAuth, 
a package for Next.js that handles all the 
tricky parts for you.
I decided to use email login with a magic link,
since there is only one administrator this seemed
like a simple and robust solution.
She only has to enter her email into a login view,
NextAuth then sends her an email with a link that
takes her to the dashboard.
Since no other emails are present in the database,
any other email entered will result in nothing 
happening.

## Deployment
I chose Netlify, as they have a generous free tier.

# Challenges
Building something like this as a volunteer comes with many challenges. 
First of all, as the company has no budget some more simple solutions (like using web analytics provided by Netfily, or a proper CMS from a SaaS company) are out of the question. 
Secondly, I need to produce something of quality that will be maintainable in the future for free.
This means that I chose technologies I was most familiar with and would have fast development speeds with,
rather than picking what would necessarily be the best option.
For instance, perhaps it would have been best to set the entire site up with Wordpress to allow Sick in the City to have more control,
but as I am not a Wordpress developer, this would have resulted in a much slower development time for myself. 

Aside from this, the technical challenges were building robust data models and writing code that will be maintainable and extendable in the future.

# Conclusion
This was a very satisfying project to work on,
and my client was extremely happy with the result.
