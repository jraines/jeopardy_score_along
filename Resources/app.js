// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();



Titanium.App.Properties.setInt('score', 0);

var win1 = Titanium.UI.createWindow({
    title:'Jeopardy! Round',
    backgroundColor:'#fff',
	url:'round1.js'
});

var win2 = Titanium.UI.createWindow({
    title:'Jeopardy! Round',
    backgroundColor:'#fff',
	url:'round2.js'
});





var tab1 = Titanium.UI.createTab({title:'Jeopardy! Round', window:win1});
var tab2 = Titanium.UI.createTab({title:'Double Jeopardy!', window:win2});

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);

tabGroup.addEventListener('focus', function() {
	Ti.API.info('tab group focus event');
	Ti.App.fireEvent('special_focus',{name:'bar'});
});

Ti.App.addEventListener('special_focus', function(){
	Ti.API.info('special focus event heard in app.js');
});

tabGroup.open();








//
// create base UI tab and root window
//


//win1.open();
