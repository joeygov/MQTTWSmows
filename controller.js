// var mows = require('mows');

function connect(){
	var brokerAdress = document.getElementById('brokerAddressInput').value;
	client = mows.createClient(brokerAdress);	
	console.log('Connecting...');

	client.on('connect', function(){
		console.log('Connected to '+ brokerAdress);
	})

	client.on('message', function (topic, message) {
		console.log('Topic: ' +  topic + '; Message: ' + message);
		//addMessage(topic + ": " + message);
	});
};

function disconnect(){
	client.disconnect();
	console.log('Disconnected');
}

function subscribe(){
	var subTopic = document.getElementById('subTopicInput').value;
	console.log('Subscribe = Topic: '+ subTopic);
	client.subscribe(subTopic);
};

function publish(){
	var pubTopic = document.getElementById('pubTopicInput').value;
	var message = document.getElementById('messageInput').value;
	console.log('Publish = Topic: '+ pubTopic + '; Message:' +message);
	client.publish(pubTopic, message);
};

function addMessage(message) {
	var text = document.createTextNode(message);
	var el = document.createElement('li');
	var messages = document.getElementById('messageOut');
	el.appendChild(text);
	messages.appendChild(el);
}
