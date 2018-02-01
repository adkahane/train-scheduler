// Initialize Firebase
var config = {
	apiKey: "AIzaSyBn1oypDiaZ10mvs5ICXs4fqM7r408pvkw",
    authDomain: "train-scheduler-f2baa.firebaseapp.com",
    databaseURL: "https://train-scheduler-f2baa.firebaseio.com",
    projectId: "train-scheduler-f2baa",
    storageBucket: "",
    messagingSenderId: "936986139518"
};
firebase.initializeApp(config);

var database = firebase.database();

$("add-train").on("click", function(event) {
	event.preventDefault();
})