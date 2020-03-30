# CoronaVirus Wellness

## Index:

- [Scope](#Scope)
- [User Stories](#user-stories)
- [Wireframes](#wireframes)
- [Data Models](#data-models)
- [Milestones](#milestones)

## Scope

The final objective is to build an app where users can collect solution cards that help with the CoronaVirus isolation problems. Users will be able to browse an index of problems, select the problem, and then view an index of solution cards. Each solution card can be added into the profile, for viewing later. Due to limited time we were working on MVP and will continue working on sprints. View Milestones section for feature builds and updates. 

##### Technologies in play

- NodeJs
    - MongoDB, 
    - Mongoose,
    - Express,
    - Body-parser
- Bootstrap
- HTML 
- CSS 
- Heroku
- Moqups(wireframing)

## User Stories

- Homepage 
    - "Be Well!" Homepage can always be accessed from navbar
	- Access problem index through navbar button “problems” 
    - _Stretch goal: Access navbar link profile_
	
- Navbar
    - Navbar links “Be Well!” and “Problems”
    - _Stretch goal: profile_

- Expelling Bad Mojo(problems page)
	- List of Problem cards: i.e. depressed, fatigue, back pain
	- Stretch goal: 6+ problems

- Problem Card
	- Each card has a name, description, and an image
    - "view” button - takes you to the solutions index of 3 cards
    - _Stretch goal: 6+ problems, 6+ solutions_

- Solutions index
	- Multiple solutions cards each with the following:
	    - Name, description, image, and link
        - Each card has an edit and delete button
	    - _Stretch goal "show profile” button - card profile_
    - At bottom of solutions index page there is an add button to add a new solution    
    - _Stretch goal - “plus button(add)” - add card to profile favorites board_	

### Stretch Goals

- Solution Card Profile
    - Image
    - More detailed description
    - Instructions
    - Link to buy
    - Button-back to list of  solutions
    - Carousel images

- Pinterest external API
    - User will be able to save a collection of self care ideas(like a pinterest board)

- Non-authenticated Users can:
    - Browse problem cards and solutions
    - Stretch goal: Press solution “add” button - alert will ask to login or create account
    - Press the link to external website

- Authenticated Users can:
    - Login
	- Modal pop-up
	- After Logining in pop up will disappear 
	- User name will display in upper right hand corner
	- Stretch goal: account setting
		- Changing username, password

- Registration
	- Modal pop-up
	- Automatically login after register
	- After registering sent back to the page you left
	
- View profile
	- Display index of saved cards, which can be clicked to view card profiles
	
- Browse problem cards and their solutions
    - Press “add” button, stores solution card into their profile database

## Wireframes

### Landing 

Users will have access to the navbar and home page

<img src="/public/images/home.png" width="200" height="200">

### Problems Index

Users can click on a specefic problem

<img src="/public/images/problemIndex.png" width="200" height="200">

### Problem Profile

In the problem the user will find solution cards

<img src="/public/images/problemShow.png" width="200" height="200">

### Solution Add

In the solution index for the problem a user can add a new solution

<img src="/public/images/solutionAdd.png" width="200" height="200">

### Solution Show

A more detailed list of solution cards

<img src="/public/images/solutionShow.png" width="200" height="200">

### Solution Card Profile

A detailed description of a specific solution

<img src="/public/images/solution.png" width="200" height="200">

### Create Account

The page to register an account for the site

<img src="/public/images/createAccount.png" width="200" height="200">

### Login

The login page

<img src="/public/images/login.png" width="200" height="200">


## Data Models

- ProblemSchema
	- Type: String,
	- Description: String,
	- Image: String,
    - Solutions: [],

- SolutionsSchema
	- Type: String,
	- Description: String,
	- Image: String,
	- Link: String, 

- _Stretch Goal_ 
    - User Schema
        - Name:
        	- Type: String,
        	- Required: true,
        - Email:
        	- Type: String,
            - Required: true,
        - Password:
            - Type: String,
            - Required: true,

- One to many, embedded data

## Milestones

#### Sprint 1 Planning - March 24
- Wireframe
- Approval
- User story

#### Sprint 2 -March 24- 26
- File structures MVP
- Boilerplates for core files
- Get server running
- Route planning blueprint
- Connect the files together
- Start bootstrap template
- Database setup
- Organizing into MVC 

#### Sprint 3 - March 27+
- Authentication 
- Login
- Profile
- Save their solution cards, database?

#### Sprint 4- pinterest API
- Connecting pinterest 

## References
- MDN https://developer.mozilla.org/en-US/
- getbootstrap.com
- Heroku
- Express city class code DEMO
- Marc Maniez 
- https://www.photopea.com/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
- https://gist.github.com/uupaa/f77d2bcf4dc7a294d109





