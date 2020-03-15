
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCKgT89gU7fSTwzEd6CuQVuihFEtu-6Vak",
    authDomain: "expenses-31bc7.firebaseapp.com",
    databaseURL: "https://expenses-31bc7.firebaseio.com",
    projectId: "expenses-31bc7",
    storageBucket: "expenses-31bc7.appspot.com",
    messagingSenderId: "212120746922",
    appId: "1:212120746922:web:aca63abf5fde2cd77609d3",
    measurementId: "G-7E80CH4V0G"
    };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref().set({
//     name: "Mike Wofford",
//     age: 34,
//     isShackedUp: true,
//     location: {
//         city: 'Largo',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data saved?')
// }).catch((e) => {
//     console.log('This failed', e)
// })

// database.ref('age').set(35)
// database.ref('location/city').set('Tampa')
// database.ref('stats').set({
//     height: 73,
//     weight: 190
// })

//database.ref('isShackedUp').remove() //=
//database.ref('isShackedUp').set(null)
// database.ref().update({  //update requires object
//     name: 'John Back',
//     age: 35,
//     job: 'Baller',
//     'location/city': 'Cincinnati'
// })


//Fetch data
// database.ref().once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val)
//     }).catch((e) => {
//         console.log('Error fetching data', e)
//     })

//Fetches data on every data change in whatever ref selected
// 
//})
//End subscription to data changes
//database.ref().off(onValueChange)

