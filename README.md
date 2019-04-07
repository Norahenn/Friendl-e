# Friendl-e
Friendl-e is a (mobile only) theraputic chatbot. This app will be made for my certification exam.

## Install

### Requirements

* npm
* pip

### Install dependencies

First of all, clone this repository in your local environment (you don't need apache to host this repo, considering it's using expo-cli).

`git clone https://github.com/Norahenn/Friendl-e.git`

Once this is done, go in the *Front-end* folder and run:

`npm install`

To install the front-end's dependencies of the project.

Then,  go in the *Back-end* folder and run:

`pip install requirements.txt`

## Deploy

As a notice, these deployement methods are only meant for a development environment. They cannot handle the same use as a production environment, and will produce security breaches due to the debug logs.

### Front-end

To run the project's front-end, you'll need to go in the Front-end folder and run:

`npm run start`

This command will launch the front-end at a specific url (different if you use the LAN Tunnel or Localhost version).

If you use an emulator, you could use the localhost version. If not, I advise you to use the tunnel version.

To be able to see the project, you could:
* use the mobile app [expo](https://expo.io/) to scan the QR code.
* use an emulator:
  
  For and android emulator, I recommend [Android Studio](https://developer.android.com/studio).
  Once installed, you can follow the [expo documentation](https://docs.expo.io/versions/latest/workflow/android-studio-emulator/) on how to setup the emulator.

  Once this is done, you just have to launch the emulator, and on the web interface openned, choose to run the app on emulator.

### Back-end

To run the project's back-end, you'll need to go in the Back-end folder and run:

`python app.py`

This command will launch the back-end at a specific url that you can go to to see the routes of the api.