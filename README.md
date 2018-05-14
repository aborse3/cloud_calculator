# cloud-calculator
React Native Application to calculate the cost of infrastructure across public clouds and find the one that is the cheapest.

## Motivation
I had two weeks to learn react native and hack a small application over the weekend for a startup I was interviewing for. I had always seen websites which offered calculating infrastructure price for various public cloud platforms. I have tried to put together a very very simple (with a very ugly UI!) app to calculate costs for four types of virtual machines on AWS and GCP.

## Background
I barely knew about HTML/CSS and React before I started to code this app. So, please forgive me for the ugly UI. This is the output after two days and I am going to improve on this. I am happy with what I could make over the period of two days. I want to take this app further and put it out there.

## Video of the app on iOS device -
Please find the [video recording](https://drive.google.com/file/d/15EWPR5BeofegC86I9TtQMHxJK8jmccY3/view?usp=sharing) of the app working on iOS to get an idea without going through the pain of setting up.

## Instructions to run the app
Before you run the application, please install Expo Client app on your phone. Find the [iOS](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8) and the [android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US) versions according to your preference.

### Pre requisites before running the following commands -
1. Node Version - v9.4.0
2. Yarn Version - v1.3.2

Run the following commands on a bash terminal in order to run the app on your phone (iOS/Android) -
1. `git clone git@github.com:paritosh16/cloud-calculator.git`
2. `cd cloud-calculator/cloud-calculator/`
3. `yarn add react-native-scripts --save`
4. `yarn start`
5. Open Expo app on you phone and scan the QR code displayed on the terminal.

Note: Please dismiss the yellow warnings while running the app by pressing them and then selecting dismiss all.

## Flow of the application
1. Select a cloud platform.
2. Select a data center region. (Limited to four regions right now!)
3. Select a virtual machine type. (TODO: Expand to other services).
4. Select an operating system. (Can have link to AWS Marketplace for a better estimate).
5. Input the number of hours the virtual machine will be utilized.
6. Click the `Get an estimate!` button.
7. The last screen will display the cost of the infrastructure on AWS and GCP along with the inference that which cloud platform proved to be cheaper than the other for you.

## Interesting Libraries
Being new to the react native community and this dev setup, I landed on quite a few must have utilities that as a backend engineer (who codes in Node.js) I will now start using. Here goes a list -
1. [Nuclide | Nuclide is built as a single package on top of Atom to provide hackability and the support of an active community. It provides a first-class development environment for React Native, Hack and Flow projects.](https://nuclide.io/)
2. [Flow: A Static Type Checker for JavaScript](https://flow.org/)
3. [GitHub - steelbrain/flow-ide: A full featured FlowType package for Atom Editor](https://github.com/steelbrain/flow-ide)
4. [GitHub - expo/exp: The Expo Development CLI](https://github.com/expo/exp)

## Bugs for a novice like me
1. If there are any comments in the Component section, the render fails on Android. Very very bizarre! I spent almost 3 hours debugging this. The following StackOverflow posting is the reference I used to fix this  - [React native: Cannot add a child that doesn’t have a YogaNode or parent node - Stack Overflow](https://stackoverflow.com/questions/46605376/react-native-cannot-add-a-child-that-doesnt-have-a-yoganode-or-parent-node)
