var firebaseConfig = {
      apiKey: "AIzaSyDOf7yVRBxSv3wJqzDsdVI13uSHM49as3A",
      authDomain: "kwitter-259fb.firebaseapp.com",
      databaseURL: "https://kwitter-259fb-default-rtdb.firebaseio.com",
      projectId: "kwitter-259fb",
      storageBucket: "kwitter-259fb.appspot.com",
      messagingSenderId: "513229498660",
      appId: "1:513229498660:web:ea520249161e8e6bafabb1"
    };
    
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
