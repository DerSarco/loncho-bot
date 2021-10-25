const Discord = require('discord.js');
const {
    prefix,
    token
} = require('./config.json');
const puteo = require('./JSONS/puteosPorJugar.json');
const frase = require('./JSONS/frasesCelebres.json');
const utils = require('./utilities.js');

const client = new Discord.Client();

const fs = require('fs');
const path = require('path');

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.member.hasPermission(['SEND_MESSAGES'])) {
        if (message.content.startsWith(`${prefix}putea`)) {
            var min = 0;
            var max = frase.frases.length;
            var random = Math.floor(Math.random() * (+max - +min)) + +min;
            let member = message.mentions.members.first();
            if (member === undefined) {
                message.channel.send("<:loncho:693130310056935505> " + 'No existe ese parguela cacho cerdo, dime a quien puteo mencionandolo con @...');
                return false;
            }
            message.channel.send("<@" + member.id + "> <:loncho:693130310056935505> " + frase.frases[random].frase);
        }
        if (message.content.startsWith(`${prefix}gritar`)) {
            let voiceChannel = message.member.voice.channel;
            if (utils.nullify(voiceChannel)) {
                var filePath = utils.sendRandomName();
                console.log(filePath)
                voiceChannel.join().then(connection => {
                    const dispatcher = connection.play(filePath);
                    dispatcher.on('finish', finish => {
                        voiceChannel.leave();
                    })
                }).catch(err => console.log(err));
            } else {
                client.channels.cache.get('692082597919981632').messages.channel.send("Esta funcion solo esta disponible en el canal de Killing Floor, debes entrar al canal para usarla marrano!");
             }
        }

        if (message.content.startsWith(`${prefix}maricon`)) {
            let voiceChannel = message.member.voice.channel;
            if (utils.nullify(voiceChannel)) {
                var filePath = utils.sendRandomName();
                voiceChannel.join().then(connection => {
                    const dispatcher = connection.play("./Audio/guaton_qlo/3.mp3");
                    dispatcher.on('finish', finish => {
                        voiceChannel.leave();
                    })
                }).catch(err => console.log(err));
            } else {
                client.channels.cache.get('692082597919981632').messages.channel.send("Esta funcion solo esta disponible en el canal de Killing Floor, debes entrar al canal para usarla marrano!");
            }
        }

        if (message.content.startsWith(`${prefix}loquendo`)) {
            let voiceChannel = message.member.voice.channel;
            if (utils.nullify(voiceChannel)) {
                var filePath = utils.sendRandomName();
                voiceChannel.join().then(connection => {
                    const dispatcher = connection.play("./Audios_fijos/loquendo/noinvito.mp3");
                    dispatcher.on('finish', finish => {
                        voiceChannel.leave();
                    })
                }).catch(err => console.log(err));
            } else {
                client.channels.cache.get('692082597919981632').messages.channel.send("Esta funcion solo esta disponible en el canal de Killing Floor, debes entrar al canal para usarla marrano!");
            }
        }

        if (message.content.startsWith(`${prefix}shrek`)) {
            let voiceChannel = message.member.voice.channel;
            if (utils.nullify(voiceChannel)) {
                var filePath = utils.sendRandomName();
                voiceChannel.join().then(connection => {
                    const dispatcher = connection.play("./Audios_fijos/shrek/shrek.mp3");
                    dispatcher.on('finish', finish => {
                        voiceChannel.leave();
                    })
                }).catch(err => console.log(err));
            } else {
                client.channels.cache.get('692082597919981632').messages.channel.send("Esta funcion solo esta disponible en el canal de Killing Floor, debes entrar al canal para usarla marrano!");
            }
        }

        if (message.content.startsWith(`${prefix}berlini`)) {
            let voiceChannel = message.member.voice.channel;
            if (utils.nullify(voiceChannel)) {
                var filePath = utils.sendRandomName();
                voiceChannel.join().then(connection => {
                    const dispatcher = connection.play("./Audios_fijos/berlini/berlini.mp3");
                    dispatcher.on('finish', finish => {
                        voiceChannel.leave();
                    })
                }).catch(err => console.log(err));
            } else {
                client.channels.cache.get('692082597919981632').messages.channel.send("Esta funcion solo esta disponible en el canal de Killing Floor, debes entrar al canal para usarla marrano!");
            }
        }

        if (message.content.startsWith(`${prefix}nadi`)) {
            let voiceChannel = message.member.voice.channel;
            if (utils.nullify(voiceChannel)) {
                var filePath = utils.sendRandomName();
                voiceChannel.join().then(connection => {
                    const dispatcher = connection.play("./Audios_fijos/berlini/nadi.mp3");
                    dispatcher.on('finish', finish => {
                        voiceChannel.leave();
                    })
                }).catch(err => console.log(err));
            } else {
                client.channels.cache.get('692082597919981632').messages.channel.send("Esta funcion solo esta disponible en el canal de Killing Floor, debes entrar al canal para usarla marrano!");
            }
        }

        if (message.content.startsWith(`${prefix}xd`)) {
            let voiceChannel = message.member.voice.channel;
            if (utils.nullify(voiceChannel)) {
                var filePath = utils.sendRandomName();
                voiceChannel.join().then(connection => {
                    const dispatcher = connection.play("./Audios_fijos/hunterx/equisde.mp3");
                    dispatcher.on('finish', finish => {
                        voiceChannel.leave();
                    })
                }).catch(err => console.log(err));
            } else {
                client.channels.cache.get('692082597919981632').messages.channel.send("Esta funcion solo esta disponible en el canal de Killing Floor, debes entrar al canal para usarla marrano!");
            }
        }

        if (message.content.startsWith(`${prefix}hunter`)) {
            let voiceChannel = message.member.voice.channel;
            if (utils.nullify(voiceChannel)) {
                //absolute path to audio
                var filePath = utils.sendRandomHunter();
                console.log(filePath);
                voiceChannel.join().then(connection => {
                    const dispatcher = connection.play(filePath);
                    dispatcher.on('finish', finish => {
                        voiceChannel.leave();
                    })
                }).catch(err => console.log(err));
            } else {
                client.channels.cache.get('692082597919981632').messages.channel.send("Esta funcion solo esta disponible en el canal de Killing Floor, debes entrar al canal para usarla marrano!");
              }
        }
    }
});

client.on('voiceStateUpdate', (oldState, newState) => {
    let newUserChannel = newState;
    let oldUserChannel = oldState;
    //identify new channel if is the specific channel
    if (newUserChannel.channelID == '692082597919981633') {
        //idenmtify bot id and if the channel is not the same.
        if (newUserChannel.id != '700822109886349312' && newUserChannel.channelID != oldUserChannel.channelID) {
            var min = 0;
            var max = puteo.puteos.length;
            var random = Math.floor(Math.random() * (+max - +min)) + +min;
            client.channels.cache.get('692082597919981632').messages.channel.send("<@" + newUserChannel.id + "> " + puteo.puteos[random].frase + "<:loncho:693130310056935505>");
        }
    };
    // if (oldUserChannel.id == '234395307759108106' && oldUserChannel.channelID !== undefined) {
    //     const channel = client.channels.cache.get('692082597919981633');
    //     channel.join().then(connection => {
    //         // Yay, it worked!
    //         console.log("Successfully connected.");
    //         client.channels.cache.get('692082597919981632').messages.channel.send("-play smash mouth all star");
    //         setTimeout(function () {
    //             channel.leave();
    //         }, 1000);

    //     }).catch(e => {
    //         // Oh no, it errored! Let's log it to console :)
    //         console.error(e);
    //     });
    // };


});


client.login(token);