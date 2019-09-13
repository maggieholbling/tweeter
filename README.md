# Tweeter Project

Tweeter is a simple, single-page Twitter clone. Its main purpose was to learn to work with HTML, CSS, JS, jQuery and AJAX (front-end).

This repository is built upon a starter code, which provided the back-end portion of this project. There is a set user in the profile section and there are two starter tweets. Submitted tweets appear under a randomly generated name and handle.

Functions:
* When user submits a tweet it appears in the tweet section

* Write a new tweet button toggles and focuses on the new tweet composer, it dissapears when user passes a threshold

* Scroll up button which appears when user passes a threshold - it takes the user back up, opening and focusing on the new tweet composer
* Counter in the new tweet composer changes based on the amount of characters inputed
* Error messages appear if the user tries to submit an empty or 140+ character tweet
* Responsive

## Screenshots

Desktop view - tweets list
!["Screenshot of desktop view - tweets list"](https://github.com/maggieholbling/tweeter/blob/master/docs/desktop-view.png?raw=true)

Tablet view - tweet creation
!["Screenshot of tablet view - tweet creation"](https://github.com/maggieholbling/tweeter/blob/master/docs/tablet-view.png?raw=true)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- md5