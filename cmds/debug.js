const { Song } = require('../db/db.js');
var {google} = require('googleapis');
require('dotenv').config()
// const { Message } = require('discord.js');

module.exports = {
	name: 'debug',
	description: 'debugging puposes',
	async execute(message, args) {
		// var service = google.youtube({
		// 	version: 'v3',
		// 	auth: process.env.YOUTUBE_TOKEN //TODO change this!!!!
		// });
		// var result =  await service.search.list({
		// 	part: 'snippet',
		// 	q: args.join(' '),
		// 	maxResults: 1
		// });
		// resultObj = await service.videos.list({
		// 	part: 'contentDetails',
		// 	id: result.data.items[0].id.videoId
		// });
		// // console.log(resultObj.data.items[0].contentDetails.duration);
		// Song.create({
		// 	guild_id: message.guild.id,
		// 	song_id: resultObj.data.items[0].id,
		// 	song_name: result.data.items[0].snippet.title,
		// 	duration: resultObj.data.items[0].contentDetails.duration,
		// 	requested_by: message.author.id,
		// });
		// Song.findOne().then((obj)=>{
		// 	console.log(obj.toJSON());
		// })
		console.log(message.member.voice.channel);
	},
};