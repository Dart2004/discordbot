//Jasper? ja?/ das ist gut
//jetzt klappt es
//schau in zeile 22 ok?
//kopier das und erstell auf neue fragen neue antworten ok?
//26
//wieviel neues denn?
//was dir einfällt
//du machst das super
//danke
//bitte
//weißt du noch andere spiele und filme???

const Discord = require("discord.js");
var hello=["hi","hello","hey"]
var feel=["fine","bad","well","good"]
var feel2=["that's fine","i'm feeling with you","that's nice","that's good"]
const client = new Discord.Client();
var games=["minecraft","fortnight","idle miner","child of light","tetris",,"wii sports","playerunknown's battlegrounds","overwatch","super mario bros.","mario kart","pokémon","the elder scrolls","grand theft car","duck hunt","wii play","call of duty","red dead","fifa","kinect adventures","nintendogs","wii fit","super mario world","the witcher","roblox",,"fortnight","frogger","lemmings","terraria","brain-jogging","super mario land","the last of us","sonic","the sims","need for speed","room","crash bandicoot","final fantasy","battlefield","fallout"]
var videos=["lord of the rings","the dark knight","the godfather","star wars","the king of the lions","fight club","back to the future","back to future","matrix","captain america","harry potter","first avenger","iron man","hulk","thor","the avengers","the dark kingdom","guardians of the galaxy","age of ultron","antman","ant-man","ant man","civil war","black widow","black panther","spider-man","homecoming","doctor strange","day of decition","infinity war","far from home","the eternals","shang-chi","legend of the ten rings","the multivers of madness","love and thunder","captian marvel"]
function ms(msg){
  for (l in hello){
    if (hello[l]==msg){
      return("hi how are you")
    }
  }
  for (l in feel){
    if (feel[l] == msg){
      return(feel2[l])
    }
  }
  if (msg.includes("how are you")) return "i'm fine thanks"
  if (msg.includes("who are you")) return "i'm talkbot"
  if (msg.includes("what are you")) return "i'm a discord bot"
  if (msg.includes("help")) return "i hope that i can help you just ask"
  if (msg.includes("what do you know")) return "i'm not knowing everything but something"
  if (msg.includes( "what is your name")) return "my name is talkbot"
  if (msg==( "hi")) return "hi"
  if (msg==( "hello")) return "hi"
  if (msg==( "hey")) return "hi"
  if (msg==( "hi")) return "hi"
  if (msg.includes("moin")) return "moin moin"
  if (msg.includes("what can i do"))
  if (msg.includes("How old are you")) return "old enough"
  
  for (game in games){
    if (msg.includes(games[game])) return(games[game]+" is a game")
  }
  for (video in videos){
    if (msg.includes(videos[video])) return(videos[video]+" is a film")
  }
  return(msg)
}
client.on("message",(message)=>{
  if (message.content.startsWith(">")){
    var msg=message.content;
    var msg=msg.replace(">","");
    console.log(msg);
    msg=msg.toLowerCase()
    if (msg.includes("add role ")){
      var msg=msg.replace("add role ","")
      message.guild.createRole({
      name: msg,
      color: 'YELLOW',
    }).then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`)).catch(console.error)
    return
    }
    message.channel.send(ms(msg))
  }
  if (message.content.includes("talkbot")){
    message.channel.send("type '>...' to message me")
  }
});
var help=["fuck","fumck","fusck","fushk","furck","shucklehead","ash","piss","shit","pee","poo",,"ash","Fuck","Ash","fUck","fuc","Fuc","fUc","FUc","fUC","fuC","FUC","FuC","cunt","CUNT","murder"]
const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("I am ready!");
});
g=true
var j=0
client.browser.valueOf()
client.on("message", (message) => {
	for (l in help){
			if (message.content.includes(help[l])){
				message.delete()
				message.channel.send(":no_entry_sign: don't say "+help[l]);
				return;
			}
		}
	if (message.author.bot)return;
	if (message.content.includes("yes")||message.content.includes("ok")){
		message.channel.send(":ok:")
	}
	if (message.content.includes("mute")){
		message.channel.send(":mute:")
	}
	if (message.content.includes("plane")& message.content.includes("t")){
		message.channel.send(":airplane_arriving:")
	}
	if (message.content.includes("plane")& message.content.includes("land")){
		message.channel.send(":airplane_departure:")
	}
	if (message.content.includes("plane")){
		message.channel.send(":airplane:")
	}
	if (message.content==("no")){
		message.channel.send(":no_entry:")
	}
	if(message.content.includes("l!")||message.content.includes("lovebot")||message.content.includes("!lb")||message.content.includes(">")){
		if (g==true) {
			g=false;
		}
		if (message.author.bot) return;
		else if (message.content.includes("weather")) {
		message.channel.send("it is fine i think");
		}
		else if (message.content.includes(".destroy")) {
		message.channel.send("destroying");
		user=client.destroy()
		}
		if (message.content.includes("who is your owner")){
			message.channel.send("my owner is dart2.0 i am in "+j+" guilds");
			return;
		}
		if (message.content.includes("say sth")){
			message.channel.send("hi",{tts:true})
		}
		else if(message.content.includes("say")){
			message.channel.send(message.content,{tts:true})
		}
		if (message.content.includes("pict")){
			message.channel.send("__/\ /\ __")
			message.channel.send("╠╦═╬╗")
			message.channel.send(" ■♪:hearts:¿ª:relaxed:º◘")
			message.channel.send("‗:arrow_up_down::arrow_up_down:¤∟←↓↨→•")
			message.channel.send("¶↨ı▼æ©️°▄¨µ©️")
			message.channel.send("¦:spades:▒▀▀«Þø▬☻¦")
		}

		if (g==true){ message.channel.send("HI I'M HERE TO HELP YOU");
		}
		if (message.content.includes("invite")){
			message.channel.send("you can invite me at https://discordapp.com/oauth2/authorize?client_id=655415053306036245&permissions=8&scope=bot")
		}
		else if (message.content.includes("hi")) {
			message.channel.send("hi how can i help you?");
			message.author.send("hi")
		} else
		if (message.content.includes("hello")) {
			message.channel.send("hi how can i help you?");
		}
		else if (message.content.includes("help")) {
			message.channel.send("how can i help you?");
		}
		else if (message.content.includes("server")){
			client.login("NjU1NTA1ODM5ODM4NDYxOTgz.XfefQQ.WXDg3BsO3Ph1ee3dxA2w5huRxAc");
		}
		else if (message.content.includes("java")) {
		message.channel.send("i'm written in java");
	}
	else if (message.content.includes("how are you")) {
		message.channel.send("I'm fine thanks, and you");
	}
	else if (message.content.includes("how you are")) {
		message.channel.send("I'm fine thanks, and you");
	}
	else if (message.content.includes("fine")&message.content.includes("and you")) {
		message.channel.send("that's fine and me too");
	}
	else if (message.content.includes("fine")) {
		message.channel.send("that's fine");
	}
	else if (message.content.includes("who are you")||message.content.includes("what are you")) {
		message.channel.send("I'm Dart2.0 and who are you in real live, "+message.author+"?");
	}
	else if (message.content.includes("see")) {
		message.channel.send("I have no eyes sorry");
	}
	else if (message.content.includes("weather")) {
		message.channel.send("It is well i think")
	}
	else if (message.content.includes("what can i do")) {
		message.channel.send("You can talk to me")
	} //else {
		//message.channel.send("for bot help say !help or ?help")
	//}
	if (message.content.includes("bot talk")){
	if (message.channel.name=="bot-talk"){
		message.channel.setName("@starter-channel")
		message.channel.send("bot talk off")
	}
	else if (message.channel.name=="starter-channel"){
	message.channel.setName("@bot talk")
	message.channel.send("bot talk on")
	}
	}
	if (message.content.includes("owner")){
		message.guild.owner.send(message.author+" asked for you")
	}
	if (message.content.includes("welcome")){
		j+=1
	}
	if (message.content.includes("bye")){
		j-=1
	}
	else {
		message.channel.send("☻:spades:╦♪╦:clubs:╦♪╦:spades:☻")
	}
	}
});
const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("I am ready!");
});
x1="1"
x2="2"
x3="3"
x4="4"
x5="O"
x6="6"
x7="7"
x8="8"
x9="9"
client.on("message",(message)=>{
	if(message.content.startsWith("tre")||message.content.startsWith("t!")){
		if(message.content.includes("invite")){
			message.channel.send("https://discordapp.com/api/oauth2/authorize?client_id=657526959877914634&permissions=0&scope=bot")
		}
		if(message.content.includes("new")){
			x1="1";
			x2="2";
			x3="3";
			x4="4";
			x5="O";
			x6="6";
			x7="7";
			x8="8";
			x9="9";
		}
		if(message.content.includes("1")){
			if(x1=="1"){
			x1="X"
			x2="O"
			}
		}
		if(message.content.includes("2")){
			if(x2=="2"){
			x2="X"
			x3="O"
			}
		}
		if(message.content.includes("3")){
			if(x3=="3"){
			x6="O"
			x3="X"
			}
		}
		if(message.content.includes("4")){
			if(x4=="4"){
			x1="O"
			x4="X"
			}
		}
		if(message.content.includes("5")){
			if(x5=="5"){
			x5="X"
			}
		}
		if(message.content.includes("6")){
			if(x6=="6"){
			x6="X"
			x9="O"
			}
		}
		if(message.content.includes("7")){
			if(x7=="7"){
			x7="X"
			x4="O"
			}
		}
		if(message.content.includes("8")){
			if(x8=="8"){
			x8="X"
			x7="O"
			}
		}
		if(message.content.includes("9")){
			if(x9=="9"){
			x9="X"
			x8="O"
			}
		}
		if(x1==x2&x2==x3){
			message.channel.send("i have won, say: tre new");
		}
		if(x1==x5&x5==x9){
			message.channel.send("i have won, say: tre new");
		}
		if(x1==x4&x4==x7){
			message.channel.send("i have won, say: tre new");
		}
		if(x2==x5&x5==x8){
			message.channel.send("i have won, say: tre new");
		}
		if(x3==x5&x5==x7){
			message.channel.send("i have won, say: tre new");
		}
		if(x3==x6&x6==x9){
			message.channel.send("i have won, say: tre new");
		}
		if(x4==x5&x5==x6){
			message.channel.send("i have won, say: tre new");
		}
		if(x7==x8&x8==x9){
			message.channel.send("i have won, say: tre new");
		}
		message.channel.send("loading game...");
		message.channel.send("--"+x1+"--|--"+x2+"--|--"+x3+"--");
		message.channel.send("-----|-----|-----");
		message.channel.send("--"+x4+"--|--"+x5+"--|--"+x6+"--");
		message.channel.send("-----|-----|-----");
		message.channel.send("--"+x7+"--|--"+x8+"--|--"+x9+"--");
	}

});
client.login("NjY0NzM3NDY4MDQ1NTkwNTY5.XhbbCQ.9qlv0oDk_fOc9W7aKpW7tddWUKQ");
