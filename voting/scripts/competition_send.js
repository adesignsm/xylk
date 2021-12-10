//initialize firebase app
//FIREBASE STORAGE SCRIPT
firebase.initializeApp({
    apiKey: "AIzaSyB1hV33RRJVDyfNhADSDrII8PpL6SzwpcM",
	authDomain: "xylk-voting.firebaseapp.com",
	projectId: "xylk-voting",
	storageBucket: "xylk-voting.appspot.com",
	messagingSenderId: "648807519047",
	appId: "1:648807519047:web:9e39ade3c26c25c0a7b262",
	measurementId: "G-1QJ0PWBY8Z"
});

var database = firebase.firestore();
var username, email, social, votes;
const increment = firebase.firestore.FieldValue.increment(1);
var click_counter = 0;
var d, hours, min, sec;

window.onload = function() {

	click_counter = localStorage.getItem("click-counter");
    
    localStorage.setItem("click-counter", click_counter);

    if (localStorage.getItem("vote-counter") === null) {
        
        localStorage.setItem("vote-counter", 0);
    }
}

setInterval(function time() {

	d = new Date();

	hours = 24 - d.getHours();
	min = 60 - d.getMinutes();
	sec = 60 - d.getSeconds();

	if ((min + '').length == 1) {

	  min = '0' + min;

	}
	
	if ((sec + '').length == 1) {

		  sec = '0' + sec;
	}

	$('#24hr-countdown-clock').html("There are " + hours + ':' + min + ':' + sec + " left to vote!");

	if (hours == "0" + 1 && min == "0" + 1 && sec == "0" + 1) {

		localStorage.setItem("vote-counter", 0);
		localStorage.setItem("click-counter", 0);
	}

	d.onchange = function() {

		localStorage.setItem("vote-counter", 0);
		localStorage.setItem("click-counter", 0);
	}

}, 1000);

function ValidateEmail(mail, social) {

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail) && social.length > 0) {

        return (true);

    } else {

        return (false);
    }
}

//FILE-UPLOAD
document.getElementById("file-submit").addEventListener("change", function() {

	if (this.files.length >= 1) {

		document.getElementById("send-button").innerHTML = "Submit Design";
		document.getElementById("send-button").style.backgroundColor = "#000";
		document.getElementById("send-button").style.cursor = "pointer";
	}
});

//SUBMIT TRIGGER PUSH TO STORAGE
document.getElementById("send-button").onmousedown = function(e) {

	email = document.getElementById("email").value;
    username = document.getElementById("name").value;
	social = document.getElementById("socials").value;
	votes = 0;

    if (ValidateEmail(email, social)) {
        
            console.log("clicked");

    	var ref = firebase.storage().ref("participants-designs");
		var file = document.getElementById("file-submit").files[0];
		var name = "Email: " + email + " || Name: " + username + " || Social: " + social + "|" + file.name;

		var metaData = {
			contentType: file.type,
		};

		var task = ref.child(name).put(file, metaData);

		task
		.then(snapshot => snapshot.ref.getDownloadURL())
		.then(url => {

			console.log(url);

			database.collection("participants").add({

				image_url: url,
				name: username,
				votes: votes

			}).then((docRef) => {

				console.log("unique id: ", docRef.id);
		
			}).catch((error) => {
		
				console.error(error);
			});
		});
    
    } else {

        console.error("data save failed");
        alert("Please enter valid email and name. Dont forget to upload design to continue");
    }
}

//SUBMISSIONS VIEWER
document.getElementById("view-submissions").onmousedown = function(e) {

	var ref = firebase.storage().ref("participants-designs");
	var files = [];

	ref.listAll().then(function(result) {

		result.items.forEach(function(image_ref) {

			image_ref.getDownloadURL().then(function(url) {

				files.push(url);

				var img_container = document.createElement("div");
				var voting_button = document.createElement("img");
				voting_button.id = "voting-button";
				voting_button.src = "./media/vote_button.gif";
				voting_button.style.width = "200px";
				
				var img = document.createElement("img");
				img.classList.add("submissions-img");
				img.src = url;
				voting_button.classList.add(img.src);
				
				img_container.appendChild(img);
				img_container.appendChild(voting_button);

				document.getElementById("submissions-images").append(img_container);

				voting_button.onmousedown = function(e) {

					// console.log(localStorage.getItem("click-counter"));
				    //console.log(e.target);
                    
					click_counter++;
					
					localStorage.setItem("click-counter", click_counter);

					if (localStorage.getItem("vote-counter") == "0") {

						database.collection("participants").get().then(function(snapshot) {

							snapshot.forEach(function(doc) {
	
								console.log(doc.id, " ", doc.data());
	
								if (e.target.className === doc.data().image_url) {
	
									database.collection("participants").doc(doc.id).update({
										votes: increment
									});

									localStorage.setItem("vote-counter", click_counter);
								}
							});
						});

						$("#submissions-container").delay(150).stop().animate({backgroundColor: "#77dd77"}, 150);
						$("#submissions-container").delay(100).animate({backgroundColor: "#ffffff"}, 250);

					} else {

						alert("you only get one vote!");
					}
				}
			});
		});
	});
}

//CLEAR DOM
document.getElementById("close-submissions-button").onmousedown = function(e) {

	setTimeout(function() {

		document.getElementById("submissions-images").innerHTML = " ";

	}, 1000);
};

//EMAIL
$(function() {

	var form = $("#ajax-contact");
	var form_msg = $("#form-messages");

	$(form).submit(function(event) {

		event.preventDefault();

		var form_data = $(form).serialize();

		$.ajax({

			type: "POST",
			url: $(form).attr("action"),
			data: form_data
		})

		.done(function(response) {

			$(form_msg).removeClass("error");
			$(form_msg).addClass("success");

			$(form_msg).text(response);

			$("#name").val("");
			$("#email").val("");
			$("#message").val("");
		})

		.fail(function(data) {

			$(form_msg).removeClass("success");
			$(form_msg).addClass("error");

			if (data.responseText !== "") {

				//success message
				$(form_msg).text(data.responseText);

			} else {
				
				$(form_msg).text("Sorry the xylkys are partying...");
			}
		});
	});
});

//EFFECTS 
var scroll_detect;

document.getElementById("submissions-container").addEventListener("scroll", function(e) {

	$("#close-submissions-button").fadeOut(100);

	window.clearTimeout(scroll_detect);

	scroll_detect = setTimeout(function() {

		$("#close-submissions-button").fadeIn(100);
		console.log("scroll stopped");
	}, 66);
});