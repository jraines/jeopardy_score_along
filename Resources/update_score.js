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

var score_label = Titanium.UI.createLabel({
	text:'0',
	top:10,
	height:'auto',
	width:300,
	textAlign:'center',
	font:{fontSize:36},
	shadowColor:'#000',
	shadowOffset:{x:4,y:4}
});


