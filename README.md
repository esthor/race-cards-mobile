# TeamOne Race Cards Mobile

This is a hackathon project, built speedily to appify 904ward's race cards

## How To I Run The App Locally

### Environment setup

Please follow the standard React Native CLI Quickstart guide here: <https://reactnative.dev/docs/environment-setup>
(Note: Don't follow the Expo CLI Quickstart, which is the default on that page)

If you need have any questions, feel uncertain about anything in the setup, just ping @esthor

### Running locally

After your environment is setup, run these commands to build the app (from the root folder):

`yarn install`

#### iOS (mac only)

`cd ios && pod install`

Then start the bundler (it needs to remain running whenever you are running the app)

`yarn start`

Then build ios:

`yarn ios`

#### Android

Start the bundler (it needs to remain running whenever you are running the app)

`yarn start`

Then build android:

`yarn android`

## Tools/Tech Used in this repo

We use a variety of useful tools to speed up development of a stable and easy-to-use app. But, sometimes it can seem like magic is going on if you don't know what the tools are and why they are used. We want to make this as inclusive of a project as we can, so below you will find an outline of the tools used in this project.

### Fundamentals

#### Code / UI

-- React Native

-- Typescript

-- React Navigation

-- Reanimated

#### CI / (C)D

-- Github Actions

-- Fastlane

-- Codepush

