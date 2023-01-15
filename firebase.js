 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import {  getFirestore, // esta es la coneccion a la db
  collection,//para guar la lista
  getDocs,//para obtener documentos
  onSnapshot,// cuando los datos cambien
  addDoc,//para añadir documentos
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
 } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"

  const firebaseConfig = {
    apiKey: "AIzaSyBHPN3o5MYSuxbf2snxHNeXI230bOf3tg0",
    authDomain: "miportafolio-f2a5f.firebaseapp.com",
    projectId: "miportafolio-f2a5f",
    storageBucket: "miportafolio-f2a5f.appspot.com",
    messagingSenderId: "110339869323",
    appId: "1:110339869323:web:917057c7188a857bf9628e"

  };
  const app = initializeApp(firebaseConfig);
  
export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, "Ejemplo"), { title, description });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "Ejemplo"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "Ejemplo", id));

export const getTask = (id) => getDoc(doc(db, "Ejemplo", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "Ejemplo", id), newFields);

export const getTasks = () => getDocs(collection(db, "Ejemplo"));