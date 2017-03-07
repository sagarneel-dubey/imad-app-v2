console.log('Loaded!');
var button = document.getElementById("button");
var counter;
var xhttp = new XMLHttpRequest(); // xtml object
var sub_btn = document.getElementById("sub_btn"); 



/*
function loadComment(){
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState === 4 && xhttp.status === 200){
			comment_arr = JSON.parse(xhttp.responseText);
			var comment_list =  '';
			for (var i = 0; i < comment_arr.length; i++){
				comment_list += "<li>" + comment_arr[i] + "</li>";
			}

			var comment_list_handle = document.getElementById("comment_list");
			comment_list_handle.innerHTML = comment_list;
			console.log("comment loaded");
		}
	};	
	xhttp.open("GET", "http://localhost:8080/load-comment", true); //make request to server to return comments
	xhttp.send();	
	
}*/



function load_display(option){
	var comment_arr = []; 
	var commentInput = document.getElementById("commentInput");

	//process response from server with the comment array
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState === 4 && xhttp.status === 200){
			comment_arr = JSON.parse(xhttp.responseText);
			var comment_list =  '';
			for (var i = 0; i < comment_arr.length; i++){
				comment_list += "<li>" + comment_arr[i] + "</li>";
			}

			var comment_list_handle = document.getElementById("comment_list");
			comment_list_handle.innerHTML = comment_list;
			commentInput.value = "Enter your Comment here";
			console.log(comment_arr.toString());

		}
	};


	//make the request with the comment extracted from text box
	if (option === "Submit"){
		var commentX = commentInput.value;
		xhttp.open("GET", "http://localhost:8080/submit-comment?comment=" + commentX, true); //make request to server with the query field	
	} else if (option === "Load"){
			xhttp.open("GET", "http://localhost:8080/load-comment", true); //make request to server to return comments
	}
	xhttp.send();	
}




//load comments at page refresh/load
load_display("Load");

//add comment nad display
sub_btn.onclick = function(){
	load_display("Submit");
}


/*
sub_btn.onclick = function(){


	var comment_arr = []; 
	var commentInput = document.getElementById("commentInput");
	var commentX = commentInput.value;

	//process response from server with the comment array
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState === 4 && xhttp.status === 200){
			comment_arr = JSON.parse(xhttp.responseText);
			var comment_list =  '';
			for (var i = 0; i < comment_arr.length; i++){
				comment_list += "<li>" + comment_arr[i] + "</li>";
			}

			var comment_list_handle = document.getElementById("comment_list");
			comment_list_handle.innerHTML = comment_list;
			commentInput.value = "Enter your Comment here";
		}
	};

	//make the request with the comment extracted from text box
	
	xhttp.open("GET", "http://localhost:8080/submit-comment?comment=" + commentX, true); //make request to server with the query field
	xhttp.send();	

};*/


//document.getElementById("name").value = "sag"


/*
//modify the counter in span
function fetchCounter(){
	if (xhttp.readyState === 4 && xhttp.status === 200){
		counter = xhttp.responseText;
		document.getElementById("count").innerHTML = counter.toString();
	}
}	



function counterValue(){
	xhttp.onreadystatechange = fetchCounter; //fetch and modify counter

	//make the request
	xhttp.open("GET", "http://localhost:8080/counterValue", true);
	xhttp.send();	
}



function incrementCounter(){
	xhttp.onreadystatechange = fetchCounter; //fetch and modify counter

	//make the request
	xhttp.open("GET", "http://localhost:8080/counter", true);
	xhttp.send();	 
}

counterValue(); //show counter value on page load
button.onclick = incrementCounter; //increment counter on button click
*/	



/*
var img = document.getElementById("img");
var marginValue = 0
var x;

function moveRight(){
	marginValue += 1;
	img.style.marginLeft = marginValue + "px";
	console.log(marginValue);
}*/

//setInterval(moveRight, 1000);

/* img.onclick = function(){
	//img.style.height = "500px";
	x = setInterval(moveRight, 50);
};

button.onclick = function(){
	clearInterval(x);
};*/
	
