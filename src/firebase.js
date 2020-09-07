import firebase from 'firebase';
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
const messaging = firebase.messaging();

export function PushNotification(){
    Notification.requestPermission().then((permission)=>{
        console.log(permission)
        if(permission === "granted"){
            messaging.getToken().then((currentToken)=>{
                if (currentToken){
                    console.log("Token",currentToken)
                }
                else{
                    console.log("No permission");
                }
            }).catch((err) =>{
                console.log('An error occured while recovering',err);
            })
        }
    })
}