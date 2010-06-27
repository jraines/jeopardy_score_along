// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var win1 = Titanium.UI.createWindow({
    title:'Jeopardy! Round',
    backgroundColor:'#fff'
});



//Titanium.App.Properties.setString('round', 'jeopardy');
Titanium.App.Properties.setInt('score', 0);


score_label = Titanium.UI.createLabel({
	text:'0',
	top:10,
	height:'auto',
	width:300,
	textAlign:'center',
	font:{fontSize:36},
	shadowColor:'#000',
	shadowOffset:{a:4,y:4}
});

win1.add(score_label);

function update_score(points, response) {
	var current_score_string = Titanium.App.Properties.getString('score');
	var current_score = Number(current_score_string);
	if (response == 'correct') {
		Titanium.App.Properties.setInt('score', current_score + points);
	} else {
		Titanium.App.Properties.setInt('score', current_score - points);
	}
	var new_score = Titanium.App.Properties.getString('score');
	score_label.text = new_score;
}

var	button1 = Titanium.UI.createButton({
	title:'200',
	width:'300px',
	top:100,
	backgroundColor:'#090775',
	color:'#fff',
	font:{fontSize:24},

});
var	button2 = Titanium.UI.createButton({
	title:'400',
	width:'300px',
	top:150,
	backgroundColor:'#090775',
	color:'#fff',
	font:{fontSize:24}

});

var	button3 = Titanium.UI.createButton({
	title:'600',
	width:'300px',
	top:200,
	backgroundColor:'#090775',
	color:'#fff',
	font:{fontSize:24}

});
var	button4 = Titanium.UI.createButton({
	title:'800',
	width:'300px',
	top:250,
	backgroundColor:'#090775',
	color:'#fff',
	font:{fontSize:24}

});

var	button5 = Titanium.UI.createButton({
	title:'1000',
	width:'300px',
	top:300,
	backgroundColor:'#090775',
	color:'#fff',
	font:{fontSize:24}

});

var button6 = Titanium.UI.createButton({
	title:'Daily Double',
	width:'300px',
	top:350,
	backgroundColor:'#090775',
	color:'#fff',
	font:{fontSize:24}
});

button1.addEventListener('click', function() {
	var popup = Titanium.UI.createAlertDialog({
		title:"Your Response",
		message:"Did you answer correctly?",
		buttonNames: ["Correct", "Incorrect", "No Answer"],
		cancel:2
	});
	popup.addEventListener('click', function(e){
		if (e.index == 0) {
			update_score(200, 'correct');
		}
		if (e.index == 1) {
			update_score(200, 'incorrect');
		}
	});
	popup.show();
});

button2.addEventListener('click', function() {
	var popup = Titanium.UI.createAlertDialog({
		title:"Your Response",
		message:"Did you answer correctly?",
		buttonNames: ["Correct", "Incorrect", "No Answer"],
		cancel:2
	});
	popup.addEventListener('click', function(e){
		if (e.index == 0) {
			update_score(400, 'correct');
		}
		if (e.index == 1) {
			update_score(400, 'incorrect');
		}
	});
	popup.show();
});

button3.addEventListener('click', function() {
	var popup = Titanium.UI.createAlertDialog({
		title:"Your Response",
		message:"Did you answer correctly?",
		buttonNames: ["Correct", "Incorrect", "No Answer"],
		cancel:2
	});
	popup.addEventListener('click', function(e){
		if (e.index == 0) {
			update_score(600, 'correct');
		}
		if (e.index == 1) {
			update_score(600, 'incorrect');
		}
	});
	popup.show();
});

button4.addEventListener('click', function() {
	var popup = Titanium.UI.createAlertDialog({
		title:"Your Response",
		message:"Did you answer correctly?",
		buttonNames: ["Correct", "Incorrect", "No Answer"],
		cancel:2
	});
	popup.addEventListener('click', function(e){
		if (e.index == 0) {
			update_score(800, 'correct');
		}
		if (e.index == 1) {
			update_score(800, 'incorrect');
		}
	});
	popup.show();
});

button5.addEventListener('click', function() {
	var popup = Titanium.UI.createAlertDialog({
		title:"Your Response",
		message:"Did you answer correctly?",
		buttonNames: ["Correct", "Incorrect", "No Answer"],
		cancel:2
	});
	popup.addEventListener('click', function(e){
		if (e.index == 0) {
			update_score(1000, 'correct');
		}
		if (e.index == 1) {
			update_score(1000, 'incorrect');
		}
	});
	popup.show();
});

button6.addEventListener('click', function() {
	var popup = Titanium.UI.createWindow({
		modal:true,
		top:20,
		height:'400px',
		backgroundColor:'#fff'
	});
	var label = Titanium.UI.createLabel({
		top:10,
		width:'300px',
		textAlign:'center',
		font:{fontSize:24},
		text:'Wager'
	});
	var wager = Titanium.UI.createTextField({
		top:50,
		width:'300px'
	});
	var button1 = Titanium.UI.createButton({
		title:'Correct',
		top:120,
		width:'300px'
	});
	var button2 = Titanium.UI.createButton({
		title:'Incorrect',
		top:190,
		width:'300px'
	});
	button1.addEventListener('click', function(){
		update_score(wager.value, 'correct');
		popup.close();
	});
	button2.addEventListener('click', function(){
		update_score(Number(wager.value), 'incorrect');
		popup.close();
	});
	popup.add(label);
	popup.add(wager);
	popup.add(button1);
	popup.add(button2);
	popup.open();
});

win1.add(button1);
win1.add(button2);
win1.add(button3);
win1.add(button4);
win1.add(button5);
win1.add(button6);


//
// create base UI tab and root window
//


win1.open();
