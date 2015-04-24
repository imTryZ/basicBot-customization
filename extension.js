(function () {

    var fork = "motelbible";
		

    function extend() {

        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        var bot = window.bot;

        bot.retrieveSettings();

        bot.loadChat();

    }
/*bot.commands.cookieCommand.cookies =['deu-lhe um biscoito de chocolate!',
                    'deu-lhe um biscoito pornô!',
                    
                ];
                bot.commands.cookieCommand = {
            command: 'cookie',
            
            
    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "WorldBot",
        language: "portuguese",
        startupCap: 1,
        startupVolume: 0,
        startupEmoji: false,
        chatLink: "https://rawgit.com/" + fork + "/basicBot/master/lang/pt.json",
        maximumAfk: 60,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 10,
        timeGuard: true,
        maximumSongLength: 9,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 1,
        lockskipReasons: [
        	["tema", "A música não se encaixa nos padrões da sala. "],
        	["op", "Essa música está na lista OP. "],
        	["historico", "A música ainda está no histórico. "],
        	["mix", "Você tocou um mix (muito longo) - não permitido. "],
        	["som", "A música que você tocou tinha má qualidade ou estava sem som. "],
        	["nsfw", "A música que você tocou é NSFW (impróprio). "],
        	["indisponivel", "A música que você tocou está indisponível. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 10,
        motd: ":fire: Entrem no nosso grupo do facebook http://goo.gl/8iFw1s e Curtam nossa página http://goo.gl/gxOOmp, Bjos do TitioBot <3",
        filterChat: false,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: "http://goo.gl/8iFw1s",
        youtubeLink: null,
        website: null,
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    $.getScript("https://rawgit.com/motelbible/basicBot/master/basicBot.js", extend);

}).call(this);
