(function(){
    const config = {
        apiKey: "AIzaSyBu9LYCNWvbUrpUokYDQTjaUnw8Ba7v_EI",
        authDomain: "mahtilive.firebaseapp.com",
        databaseURL: "https://mahtilive.firebaseio.com",
        projectId: "mahtilive",
        storageBucket: "mahtilive.appspot.com",
        messagingSenderId: "847711424854"
      };
      firebase.initializeApp(config);

      //get elements
      const preObject = document.getElementById('object');

      // Create reference
      const dbRefObject = firebase.database().ref().child('object');

      //synchronize object changes
      dbRefObject.on('value',snap => console.log(snap.val()));

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          // ...
          window.location.href = "index.html"
        }
      });
            
    


}());