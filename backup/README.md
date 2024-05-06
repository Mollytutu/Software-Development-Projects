
# Project Title
Open Your Circle


## Overview
This website provides a platform for professionals to showcase their expertise and availability. Users can browse profiles of local professionals and book paid services such as scheduled quick calls, request quotes, or schedule consulting sessions directly.

### Problem

When someone's child needs a quick tutoring session with a Grade 3 math teacher, or a senior wants to ask multiple doctors regarding their health concern before make any decision, it may take a lot of effort to figure out how to connect with the right person.

On the other side, many doctors, accountants, and realtors etc. are willing to help people and share their knowledge for a small fee. However, there is no well-known platform that provides a quick way for them to show the public their availability."


### User Profile

Users: Anyone willing to pay a small fee can quickly and effortlessly get answers to random questions from an expert in the field.

Service Providers: Professionals with expertise in various fields who are willing to share their knowledge for a fee. 

### Features

For example, a professor teaching astronomy could create a simple profile page introducing themselves and set their available times, such as Wednesday afternoons from 4 pm to 9 pm, who interested can book a 10-minute sessions for $20.

User:
     - able to find people based on expertise          categories

    - ( good to have)simple personal page interduce themself which can create credibility. 

    - able to see expertises the avialabe schedule and booking through the website. 
    
    - ( good to have) Integration of payment and review functions for transactions and feedback. 

Expertise:

   -a easy setup personal page, allowing them to post blogs and upload pictures (via URL links).

   -Account verification process for accountability.

   -Setting available hours and days, service types, and charges.

    good to have

        -Notification system for booking requests.

        -Ability to accept or reject booking requests and send responses accordingly.

        -Option to review users after booking accomplication or report suspicous id. 

## Implementation

### Tech Stack

React
Nest.js
TyperScript
prisma
next.auth
Trpc(good to have)


### APIs

- No external APIs will be used 

### Sitemap

-Home Page:
    Display categories and spotlights for easy navigation and featured content.
    -contact us
    -about
-Login
-signup
    -setup service page
    -setup schedule page
-category page for each job category ( software engineer, nurse )
-personal page for each user 



<!-- good to have
    -recived booking page (include reponse choices and short notes)
    -user payment page ( if booking accepted)
    -booking confirmed page( after payment go through) Time slot will show booked on the schedule page.  -->

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data
     each user:
    {
      "id": 99990001,
      "name": "Tony Johnson",
      "position": "Nasa engineer",
      "specialization": "Expert in spacecraft design and engineering for NASA missions.",
      "image": "../assets/images/profile1.png"
      "selt-introduction":'"
    },


### Endpoints
/                               home
/about
/contact
/login                          login 
/signup                         signup
/dashboard                      service setup
/dashboard/opening              service time setup
/user/40000001                  sample of user page ( linked first userID of nurse page)
/categories/healthcare/nursing  job category -nurse
categories/information-technology/software-development  job category-sde

### Auth

Next.auth 
setup successfully with: DISCORD_CLIENT_ID

## Roadmap

-use next.js create project
-create home page
-create basic header and footer componant 
-create user:id page (good to have:include reviews:hard code)
-create schedule and booking page. 
-create sign up and login page. 

    Good to have:
        -create booking notification page with response component
        -create booking accepted notification page. 
        -creat confirm appointment accomplished and add review review page. 