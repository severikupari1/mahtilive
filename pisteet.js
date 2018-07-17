(function () {
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
  dbRefObject.on('value', snap => console.log(snap.val()));

  firebase.auth().onAuthStateChanged(function (user) {
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

  // var logout = document.getElementById("logout");
  // logout.addEventListener("click",function(e){
  //     console.log("Painettu");
  //     firebase.auth().signOut().then(function() {
  //         // Sign-out successful.
  //       }).catch(function(error) {
  //         // An error happened.
  //       });

  // },false);



  //Logic

  var firestore = firebase.firestore();

  const mahtipisteplus1 = document.querySelector("#mahtipisteplus");

  const docRef = firestore.doc("Mahti/peli");


  $(document).ready(function () {

    // jQuery methods go here...

    //mahti

    $("#mahtipisteplus").click(function () {


      docRef.get().then(function (doc){
        
        const testi = doc.data();
        console.log(testi);
        testi.mahtipisteet++;
        console.log(testi);
        docRef.update({
          mahtipisteet: testi.mahtipisteet
        }).then(function (){
          console.log("Saved to db");
  
        }).catch(function (error){
            console.log("Got an error",error);
  
        });
        
      })
     
      

      


      // database.ref('Mahti/1').pisteet 

    });

    $("#mahtipisteminus").click(function () {
      docRef.get().then(function (doc){
        
        const testi = doc.data();
        console.log(testi);
        testi.mahtipisteet--;
        console.log(testi);
        docRef.update({
          mahtipisteet: testi.mahtipisteet
        }).then(function (){
          console.log("Saved to db");
  
        }).catch(function (error){
            console.log("Got an error",error);
  
        });
        
      })


    });

    $("#mahtieraplus").click(function () {
      docRef.get().then(function (doc){
        
        const testi = doc.data();
        console.log(testi);
        testi.mahtierat++;
        console.log(testi);
        docRef.update({
          mahtierat: testi.mahtierat
        }).then(function (){
          console.log("Saved to db");
  
        }).catch(function (error){
            console.log("Got an error",error);
  
        });
        
      })


    });

    $("#mahtieraminus").click(function () {
      docRef.get().then(function (doc){
        
        const testi = doc.data();
        console.log(testi);
        testi.mahtierat--;
        console.log(testi);
        docRef.update({
          mahtierat: testi.mahtierat
        }).then(function (){
          console.log("Saved to db");
  
        }).catch(function (error){
            console.log("Got an error",error);
  
        });
        
      })

    });

    //Vieras

    $("#vieraspisteplus").click(function () {


      docRef.get().then(function (doc){
        
        const testi = doc.data();
        console.log(testi);
        testi.vieraspisteet++;
        console.log(testi);
        docRef.update({
          vieraspisteet: testi.vieraspisteet
        }).then(function (){
          console.log("Saved to db");
  
        }).catch(function (error){
            console.log("Got an error",error);
  
        });
        
      })

    });

    $("#vieraspisteminus").click(function () {
      docRef.get().then(function (doc){
        
        const testi = doc.data();
        console.log(testi);
        testi.vieraspisteet--;
        console.log(testi);
        docRef.update({
          vieraspisteet: testi.vieraspisteet
        }).then(function (){
          console.log("Saved to db");
  
        }).catch(function (error){
            console.log("Got an error",error);
  
        });
        
      })

    });

    $("#vieraseraplus").click(function () {


       docRef.get().then(function (doc){
        
        const testi = doc.data();
        console.log(testi);
        testi.vieraserat++;
        console.log(testi);
        docRef.update({
          vieraserat: testi.vieraserat
        }).then(function (){
          console.log("Saved to db");
  
        }).catch(function (error){
            console.log("Got an error",error);
  
        });
        
      })

    });

    $("#vieraseraminus").click(function () {

      // console.log("PAINETTU");
      
      docRef.get().then(function (doc){
        
        const testi = doc.data();
        console.log(testi);
        testi.vieraserat--;
        console.log(testi);
        docRef.update({
          vieraserat: testi.vieraserat
        }).then(function (){
          console.log("Saved to db");
  
        }).catch(function (error){
            console.log("Got an error",error);
  
        });
        
      })

    });



  });





}());