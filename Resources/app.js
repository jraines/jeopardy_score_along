// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var win1 = Titanium.UI.createWindow({
    title:'Jeopardy! Round',
    backgroundColor:'#fff'
});


var scores = [200, 400, 600, 800, 1000];

//Titanium.App.Properties.setString('round', 'jeopardy');
Titanium.App.Properties.setInt('score', 0);

alert(Titanium.App.Properties.getString('score', 'error'));

score_label = Titanium.UI.createLabel({
	text:'0',
	top:10,
	height:'auto',
	width:300,
	textAlight:'center',
	font:{fontSize:18},
	shadowColor:'#aaa',
	shadowOffset:{a:3,y:3}
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
	top:100
});
var	button2 = Titanium.UI.createButton({
	title:'400',
	width:'300px',
	top:150
});

var	button3 = Titanium.UI.createButton({
	title:'600',
	width:'300px',
	top:200
});
var	button4 = Titanium.UI.createButton({
	title:'800',
	width:'300px',
	top:250
});

var	button5 = Titanium.UI.createButton({
	title:'1000',
	width:'300px',
	top:300
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


win1.add(button1);
win1.add(button2);
win1.add(button3);
win1.add(button4);
win1.add(button5);



//
// create base UI tab and root window
//


win1.open();
