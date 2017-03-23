# Minor WebDev | Performance Matters
Dave Bitter | 500710907

    V 1.0.0

## General
This repository holds the seperate exercises for the course 'Performance Matters', part of the minor "Webdevelopment" at the [HvA](http://www.hva.nl/)

All exercise folders are standalone projects and work as such. You can navigate through the folder structure or through the navigation below.

## Issues
I highly encourage adding issues to this repo in the case of finding one. I'm always up for improving my code.

## Get it running
### Clone this repo, duh
    git clone https://github.com/DaveBitter/minor-webdev_performance-matters
    cd minor-webdev_performance-matters

### Install the dependencies
    nmp install

### Get the credentials
Contact me at <daveybitter@gmail.com> for the .env file to run this app.

### Start up the server
When you run this command, changes in serverside JS files will be watched and the server will restart automatically, changes in clientside JS files will be watched and browserified and the server will be restarted.

    npm start

### Additional commands
Browserify clientside JS

    npm run build

Watchify clientside JS

    npm run watch

Clean clienside build.js file

    npm run clean

## Features
### No JS Fallback
The app will use routing to load in detail pages for movies when no JS is available. The default behaviour will be prevented when you click on a link to the detail pages for movies when JS is available. Instead, their will be an API call on the clientside to get the data. After that, the detailled movie data will be shown in a pop-up modal.

### API call to own server
The clientside API call will be called to our own server in order to keep the API-key on the serverside. 

I also do this so I can (re)use functions that are written in the serverside code. This prevents double JS work and reduces the amount/filesize of JS on the clientside.
