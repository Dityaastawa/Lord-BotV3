let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 085792429140
│┝‷✧ *Dana:* 085792429140
│┝‷✧ *Linkaja:* -
│┝‷✧ *Gopay:* -
│┝‷✧ *Ovo:* -
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6285237596750?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
