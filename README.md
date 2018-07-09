###### Current dodo list: (dont commit this lmao crying emoji)

- revise idea behind example project to see if it fits the use case of providing an example to the below subjects.
- authentication
- ...yes, that includes JWT blacklisting
- more crud operations! :D
- some external api?
- LOGIN WITH FACEBOOK
- write docs:
  - general tools and components to this project and their role
  - explain Express
  - explain modules
  - explain REST
  - explain mongo/mongoose
  - explain auth/JWT
  - explain angular
  - explain DI
  - explain routing(step 1: learn about routing)
  - DONT explain the facebook SDK, ^(im still 4 versions behind myself)
- haha yes
-  ~~make either fame or money off of this in some way~~
- microtransactions? lootboxes?

# Uitstelgedrag

A todo-app made with Angular, Express, MongoDB and Node for educational purposes. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

_Note: this is an example implementation of the MEAN-stack without the overhead of cloning the official repository. Some files may be missing when compared._


# Setup and installation  

This project uses Angular, Express, Node, MongoDB, so make sure those are up and running.
Additionally, Nodemon is used to reflect changes in code on file change. 

To get started, run: 

```
git clone https://github.com/ikbenpinda/NgUitstelgedrag.git
cd NgUitstelgedrag/uitstelgedrag
git checkout pwa
npm install
nodemon ./express/server.js
npm start

```
(npm start instead of ng serve --open is needed to load the ssl certificates.)

### Enabling HTTPS for the PWA(Progressive Web App)

PWAs require HTTPS, and especially for local development this is a motherfucking pain to work with.  
For this project, example certs have been generated and placed under /ssl.  
However, these are self-signed and thus not secure.  

So to make sure everything works:  
1. use ```npm start``` instead of the usual ```ng serve```.  
2. navigate to **https**\://localhost:4200 (Angular). A message will be displayed mentioning the insecure certificate.
Add an exception for this.  
3. navigate to **https**\://localhost:3000 (Express). Doing the same thing here will make sure the front-end can connect with the backend (since HTTPS<>HTTP traffic can cause some issues).  

The backend will be available on localhost:3000, the frontend on localhost:4200, now both using HTTPS.

### Installing the PWA on your Android device.

PWAs can work on both iOS and Android, although better supported on Android.  
To install the PWA on your phone, you need to connect your phone to the server, and select "Add to homescreen" from the options menu.  

There are a few options to connect your phone to your machine outlined below, sorted by laziness.
1. **Connecting your phone to your computer.**  
By far the easiest way. Run ```ipconfig``` or ```ifconfig``` from your terminal on your computer to find your ip-address, 
then hit up ```YOUR_IP_ADDRESS_HERE:4200``` in the browser on your phone. Firewalls usually mess this up, 
so depending on your network configuration the device might be unable to connect.  
2. **Connecting your computer to your phone.**  
The second easiest way. Enable wi-fi tethering / mobile hotspot on your Android device and connect your 
PC/Laptop to your phones hotspot. Then run ```ipconfig``` or ```ifconfig``` from your terminal to see the ip-address of your computer.
All you need to do now is hit up ```YOUR_IP_ADDRESS:4200``` on your phone's browser and select "Add to homescreen".  
3. **~~Hacking the mainframe~~ Tethering over usb.**   
By far the most complicated but useful method, a third way would be to connect your phone over usb, then add port forwarding using Google Chrome.  
After doing so you can access the server on your phone's browser through ```localhost:4200```.
This can get kind of messy and technical, so i'll just leave [this](https://codelabs.developers.google.com/codelabs/migrate-to-progressive-web-apps/index.html?index=..%2F..%2Findex#1) here(_See "Viewing the site on mobile"_).  
If your phone does not get detected properly, you might need to install SDKs and drivers, so if you have never bridged your phone/pc ever before, just pick one of the other options.  
tip: run ```adb devices``` to start the daemon if your device doesn't get detected properly.

### Generating your own self-signed certificates

```openssl``` is installed by default on Mac OSX, on Windows, this comes with git-bash.
Certs can be generated using openssl and a shitload of switches. Best to google them, I can't tell you much about it.

### MongoDB
MongoDB is used together with the [Mongoose](http://mongoosejs.com/) ORM. To get a better understanding of Mongoose, you're probably better off skipping the manual for now and starting with [the GitHub page](https://github.com/Automattic/mongoose). 

### Modules
Modules have been used to split up the server.js file. Information about working with modules can be found [here](https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc), [here](https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/), and [here](https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8)

### Used libraries

This project uses the following libraries/frameworks:  
[Angular](angular.io)  
[Angular Material](https://material.angular.io/)  
[Node](http://nodejs.org/)  
[Express](https://expressjs.com/)  
[dotenv](https://github.com/motdotla/dotenv/)  
[bodyparser](angular.io)  
[MongoDB](https://www.mongodb.com/)  
[Mongoose ORM](https://github.com/Automattic/mongoose)  
[openssl](https://www.openssl.org/)  

---

Etienne, 2018.
