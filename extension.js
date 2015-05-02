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



    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "caliBot",
        language: "portuguese",
        startupCap: 1,
        startupVolume: 0,
        startupEmoji: false,
        chatLink: "https://rawgit.com/" + fork + "/basicBot/master/lang/pt.json",
        maximumAfk: 15,
        afkRemoval: true,
        maximumDc: 15,
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
        commandCooldown: 10,
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
        motdInterval: 5,
        motd: "!roulette",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: "No momento não temos uma página no facebook, porém, o link de nosso fórum é http://goo.gl/9ku6fp",
        youtubeLink: "No momento não temos um canal no youtube, porém, o link de nosso fórum é http://goo.gl/9ku6fp",
        website: "O link de nosso fórum é http://goo.gl/9ku6fp",
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    $.getScript("https://rawgit.com/imTryZ/basicBot/master/basicBot.js", extend);

}).call(this);
