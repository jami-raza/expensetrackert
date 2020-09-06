importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js')

const firebaseConfig = {
    apiKey: "AIzaSyAWdzyJhz8vbfwXZ_izI1f5_9bdNdyNKFU",
    authDomain: "daily-budget-calculator.firebaseapp.com",
    databaseURL: "https://daily-budget-calculator.firebaseio.com",
    projectId: "daily-budget-calculator",
    storageBucket: "daily-budget-calculator.appspot.com",
    messagingSenderId: "814772189110",
    appId: "1:814772189110:web:a8e8f8bfe350a080393317"
}
firebase.initializeApp(firebaseConfig)
firebase.messaging();