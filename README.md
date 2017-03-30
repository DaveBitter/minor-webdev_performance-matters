# Minor WebDev | Performance Matters
Dave Bitter | 500710907

![What Movie To Watch app](https://raw.githubusercontent.com/DaveBitter/minor-webdev_performance-matters/master/screenshots/hero.jpg)

    V 1.0.2
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
    npm install

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

Clean clientside build.js file

    npm run clean

## Features
![user flow app](https://raw.githubusercontent.com/DaveBitter/minor-webdev_performance-matters/master/screenshots/flow.png)

This takes the lack of JS and flaky internet connections in account. The process above is realized by the features below.

### No JS Fallback
![app without Javascript](https://raw.githubusercontent.com/DaveBitter/minor-webdev_performance-matters/master/screenshots/app_1.png)

The app will use routing to load in detail pages for movies when no JS is available. The default behaviour will be prevented when you click on a link to the detail pages for movies when JS is available. Instead, their will be an API call on the clientside to get the data. After that, the detailled movie data will be shown in a pop-up modal.

### API call to own server
![API call to own server](https://raw.githubusercontent.com/DaveBitter/minor-webdev_performance-matters/master/screenshots/app_2.png)

The clientside API call will be called to our own server in order to keep the API-key on the serverside. 

I also do this so I can (re)use functions that are written in the serverside code. This prevents double JS work and reduces the amount/filesize of JS on the clientside.

### Faster Loading from cache
We only want to load detailed movie data once although the data being requested isn't that much. It makes sense to cache the data and re-render the component based on that data. I used Local Storage to accomplish this. The app will check whether the required data is in Local Storage. It will do the API call to our own server otherwise.

### No Internet 
![app without internet](https://raw.githubusercontent.com/DaveBitter/minor-webdev_performance-matters/master/screenshots/app_3.png)

The app will display a message and the latest viewed movies when there is no connection from the client to the server. It will use a Service Worker to cache the HTML, CSS, JS and image for rendering this page. It will use Local Storage to render the data for the latest viewed movies.

### Extra optimizations
I used the following techniques for optimizing the performance further:
* G-Zip Compression
* Compressing of image

### Lighthouse
The lighthouse score I got was 87/100. The points that need optimization are color contrast and using HTTPS instead of TLS. I disagree with the first one. I didn't have the time for the second one. You can view the report below.

[Lighthouse report](http://webdev.davebitter.com/exercises/pm/lighthouse/)

## License
[MIT](LICENSE.md) © [Dave Bitter](https://github.com/DaveBitter/)

