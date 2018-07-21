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

      var firestore = firebase.firestore();

  const mahtipisteplus1 = document.querySelector("#mahtipisteplus");

  const docRef = firestore.doc("Mahti/peli");
     


  $( document ).ready(function() {
    getRealTimeUpdatesIndex = function () {
        docRef.onSnapshot(function (doc) {
          if (doc && doc.exists) {
            const allData1 = doc.data();
            console.log(allData1);
            
            $("#mahtipistekenttaindex").text(allData1.mahtipisteet);
            $("#mahtieratkenttaindex").text(allData1.mahtierat);
            $("#vieraspistekenttaindex").text(allData1.vieraspisteet);
            $("#vieraseratkenttaindex").text(allData1.vieraserat);
            
            
          }
        });
      }

      getRealTimeUpdatesIndex();
});
  
   
  
      


    


}());