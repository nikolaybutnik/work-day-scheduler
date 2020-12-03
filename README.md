# Work Day Scheduler

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A project done as part of Carleton University Coding Bootcamp. The focus was on creating an interactive web-based work day organizer. The completed application displays a set of time blocks where user can write personalized notes, and click the save button to save the notes to local storage. Each time block is color coded based on whether the time block is in the past, present or future.

[Link to application](https://nikolaybutnik.github.io/work-day-scheduler/)

![Work Day Shceduler Image](https://github.com/nikolaybutnik/work-day-scheduler/blob/master/assets/images/work-day-scheduler-screenshot.png?raw=true)

## Purpose

The purpose of this application is to help the user organize their busy daily work schedule by providing a means of keeping track of time sensitive tasks, aided by color coding for a smoother and more intuitive user experience.

## Instructions

Upon opening the application, the user is presented with a dynamically updated current date and time at the top of the page. Below that is a set of time blocks in accordance with standard business hours, in hourly increments. Each time block is divided into three parts: the time displayed on the left, text body that the user can update in the middle, and a save button on the right.

Each time block will be color coded relative to current time. Grey represents past time blocks, red represents the current time block, and green represents future time blocks.

Clicking on the main body of the block will enable the user to enter a custom note. This text can be as long as necessary, will be contained to the same dimensions, and will become scrollable once the overflow point is reached. Clicking on the save button to the right will write the user's entered text to local storage. The text content can be updated or deleted at any time.

## Built With

- HTML
- CSS
- JavaScript
- jQuery
- Bootstrap
- MomentJS
