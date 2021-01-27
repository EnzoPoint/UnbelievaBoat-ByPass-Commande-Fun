const discord = require("discord.js"),
Ntm = new discord.Client(),
colors = require('colors'),
dateFormat = require('dateformat');

Ntm.login("Your Token")

Ntm.on('ready', () => {

console.log(" ")
console.log("       ----------------------------".cyan)
console.log("       Ready pour make de la thune".cyan)
console.log(" ")
console.log("       Make With love by LabsRat :p".cyan)
console.log("       ----------------------------".cyan)

});

colors.setTheme({
  help: 'pink',
  warn: 'yellow',
  error: 'red'
});

Ntm.on('message', message => {
const msg = message;
const prefix = "/"

/*
var log = console.log;

log = function () {
 
    var first_parameter = arguments[0];
    var other_parameters = Array.prototype.slice.call(arguments, 1);
    var now = new Date();
	
    function formatdate (date) {
		
		var timee = now
		
        return timee;
    }

    log.apply(console, [formatdate(new Date()) + first_parameter].concat(other_parameters));
};
*/


if(message.content.startsWith(prefix + "autowork")) {

if (!message.author.id == "495309061697306629") return;

if(message.deletable) message.delete().catch(console.error())

console.log(" ")
console.log(" - le mode auto work a ete lancer :p".red)

const socoment = message.guild.channels.find(channel => channel.id === "644962493046718476");

var interval = setInterval (function () {
	
 socoment.send("!work").catch(console.error)
 console.log(" ")
 console.log(" ")
 console.log(" - la commande Work a ete effectue :=)".green) 

}, 180000);

}

if(message.content.startsWith(prefix + "autoslut")) {

if (!message.author.id == "495309061697306629") return;

if(message.deletable) message.delete().catch(console.error())

console.log(" ")
console.log(" - le mode auto slut a ete lancer :p".red)
 
const socoment = message.guild.channels.find(channel => channel.id === "644962493046718476");

var interval = setInterval (function () {
	
 socoment.send("!slut").catch(console.error)
 console.log(" ")
 console.log(" ")
 console.log(" - la commande slut a ete effectue :=)".green) 

}, 1 * 1800000);

}

if(message.content.startsWith(prefix + "autocrime")) {

if (!message.author.id == "495309061697306629") return;

if(message.deletable) message.delete().catch(console.error())

console.log(" ")
console.log(" - le mode auto crime a ete lancer :p".red)

const socoment = message.guild.channels.find(channel => channel.id === "644962493046718476");

var interval = setInterval (function () {
	
 socoment.send("!crime").catch(console.error)
 console.log(" ")
 console.log(" ")
 console.log(" - La commande crime a ete effectue :=)".green) 

}, 1 * 3600000);

}

});
