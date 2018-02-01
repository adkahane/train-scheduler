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

$("#add-train").on("click", function(event) {
	event.preventDefault();

	var trainName = $("#name-input").val().trim();
	var destination = $("#dest-input").val().trim();
	var firstTrain = $("#time-input").val().trim();
	var frequency = $("#freq-input").val().trim();

	console.log(trainName)
	console.log(destination)
	console.log(firstTrain)
	console.log(frequency)

	database.ref().push({
		trainName: trainName,
		destination: destination,
		firstTrain: firstTrain,
		frequency: frequency
	});

	// Clear form text boxes
	$("#name-input").val("");
	$("#dest-input").val("");
	$("#time-input").val("");
	$("#freq-input").val("");
});

database.ref().on("child_added", function(childSnapshot){
	console.log(childSnapshot.val());

	var dataTrainName = childSnapshot.val().trainName;
	var dataDestination = childSnapshot.val().destination;
	var dataFirstTrain = childSnapshot.val().firstTrain;
	var dataFrequency = childSnapshot.val().frequency;
	
	var timeDiff = moment().diff(dataFirstTrain, "minutes");
	var minSinceTrain = dataFrequency % timeDiff;
	var minAway = dataFrequency - minSinceTrain;
	var nextArrive = moment().add(minAway, "minutes").format("HH:mm");

	$("tbody").append("<tr><td>" + dataTrainName + "</td><td>" + dataDestination + "</td><td>" + dataFrequency + "</td><td>" + nextArrive + "</td><td>" + minAway + "</td></tr>");
});