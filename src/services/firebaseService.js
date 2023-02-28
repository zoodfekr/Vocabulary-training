import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import firebaseConfig from '../config/firebaseConfig';

var firebase = null;
var firestore = null;
var citiesRef = null;

function initializeFirebase()
{
    if (firebase == null) {
        firebase = initializeApp(firebaseConfig);
        firestore = getFirestore(firebase);
        citiesRef = collection(firestore, "cities");
    }
}

export async function getCities()
{
    initializeFirebase();
    let output = [];
    const querySnapshot = await getDocs(citiesRef);
    querySnapshot.forEach(doc => {
        output.push(doc.data());
    });

    return output;
}