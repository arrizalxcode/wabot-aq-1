let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085600896381]
│ • 3 [6289508984751]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [085600896381]
│ • https://saweria.co/arrizalkz
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
