const WebSocket = require('ws');
const R = require('ramda');

const wss = new WebSocket.Server({ port: 9000 })

const players = []

const broadcast = (data, ws) => {
	wss.clients.forEach((client) => {
		if (client.readyState === WebSocket.OPEN && client !== ws ) { 
			client.send(JSON.stringify(data))
		}
	})
}

const getUniqueID = () => {
	const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	return s4() + s4() + '-' + s4();
};

const sortPlayerByScore = R.sortWith([R.descend(R.prop('score'))]);
  
wss.on('connection', (ws) => {
	let index
	const playerId = getUniqueID();
	index = players.length;
	const player = {
	  name: "",
	  score: 1000,
	  id: index+1,
	  uid: playerId,
	} 
	players.push(player)
	ws.on('message', (message) => {
		const data = JSON.parse(message)
		switch (data.type) {
			case 'ADD_PLAYER': 
        player.name = data.name;
        
        ws.send(JSON.stringify({
					type: 'ADD_PROFILE',
					player
				}))

				ws.send(JSON.stringify({
					type: 'PLAYERS_LIST',
					players
				}))
				broadcast({
					type: 'PLAYERS_LIST',
					players
        }, ws) 
        
				break
			case 'BOOST':
					const point = ~~(Math.random() * 1000);
					player.score = player.score + point;
					players.map( p =>{
						if(p.name === player.name) {
							p.score = player.score
						}
					})
        break
			default:
				break
		}
	})
	
	const pushPlayers = setInterval(function () {
		ranking = sortPlayerByScore(players);
		ws.send(JSON.stringify({
			type: 'PLAYERS_LIST',
			players: ranking
		}))
		broadcast({
			type: 'PLAYERS_LIST',
			players: ranking
		}, ws)
	  }, 2500);

	const addPoint = setInterval(function () {
		player.score = player.score + ~~(Math.random() * 100);
		players.map( p =>{
			if(p.name == player.name){
				p.score = player.score
			}
		})
	}, 1000);


	ws.on('close', () => {
		players.splice(index, 1)
		broadcast({
			type: 'PLAYERS_LIST',
			players
		}, ws)
  })
  
})


