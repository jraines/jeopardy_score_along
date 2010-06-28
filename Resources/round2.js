Titanium.include('update_score.js');

update_score(0, 'correct');

var	button1 = Titanium.UI.createButton({
	title:'400',
	width:'300px',
	top:100,
	backgroundColor:'#090775',
	color:'#fff',
	font:{fontSize:24},

});
var	button2 = Titanium.UI.createButton({
	title:'800',
	width:'300px',
	top:150,
	backgroundColor:'#090775',
	color:'#fff',
	font:{fontSize:24}

});

var	button3 = Titanium.UI.createButton({
	title:'1200',
	width:'300px',
	top:200,
	backgroundColor:'#090775',
	color:'#fff',
	font:{fontSize:24}

});
var	button4 = Titanium.UI.createButton({
	title:'1600',
	width:'300px',
	top:250,
	backgroundColor:'#090775',
	color:'#fff',
	font:{fontSize:24}

});

var	button5 = Titanium.UI.createButton({
	title:'2000',
	width:'300px',
	top:300,
	backgroundColor:'#090775',
	color:'#fff',
	font:{fontSize:24}

});

var button6 = Titanium.UI.createButton({
	title:'Final Jeopardy',
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
			update_score(400, 'correct');
		}
		if (e.index == 1) {
			update_score(400, 'incorrect');
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
			update_score(800, 'correct');
		}
		if (e.index == 1) {
			update_score(800, 'incorrect');
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
			update_score(1200, 'correct');
		}
		if (e.index == 1) {
			update_score(1200, 'incorrect');
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
			update_score(1600, 'correct');
		}
		if (e.index == 1) {
			update_score(1600, 'incorrect');
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
			update_score(2000, 'correct');
		}
		if (e.index == 1) {
			update_score(2000, 'incorrect');
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
		update_score(Number(wager.value), 'correct');
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



Titanium.App.addEventListener('special_focus', function(){
	update_score(0,'correct');
});

Titanium.UI.currentWindow.add(score_label);
Titanium.UI.currentWindow.add(button1);
Titanium.UI.currentWindow.add(button2);
Titanium.UI.currentWindow.add(button3);
Titanium.UI.currentWindow.add(button4);
Titanium.UI.currentWindow.add(button5);
Titanium.UI.currentWindow.add(button6);


