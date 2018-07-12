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

      var ui = new firebaseui.auth.AuthUI(firebase.auth());
            
      var uiConfig = {
callbacks: {
signInSuccessWithAuthResult: function(authResult, redirectUrl) {
// User successfully signed in.
// Return type determines whether we continue the redirect automatically
// or whether we leave that to developer to handle.
return true;
},
uiShown: function() {
// The widget is rendered.
// Hide the loader.
document.getElementById('loader').style.display = 'none';
}
},
// Will use popup for IDP Providers sign-in flow instead of the default, redirect.
signInFlow: 'popup',
signInSuccessUrl: 'pisteet.html',
signInOptions: [
// Leave the lines as is for the providers you want to offer your users.
firebase.auth.GoogleAuthProvider.PROVIDER_ID,
firebase.auth.EmailAuthProvider.PROVIDER_ID,

],
// Terms of service url.
tosUrl: 'https://termsfeed.com/terms-service/1e7a83ef66b987b3cc8c0cc53c3481f1'
};


// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);


}());