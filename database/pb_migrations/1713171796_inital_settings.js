/// <reference path="../pb_data/types.d.ts" />
//  Sets the App Name, Logs, Sender Name, Sender Address, Backups Max Count, and Backups Cron
//  Backup Chronjob is set to run at midnight every day
migrate((db) => {
    const dao = new Dao(db);
    const settings = dao.findSettings()

    settings.meta.appName = "KabanDonDB"
    settings.logs.maxDays = "2"
    settings.meta.senderName = "Eden"
    settings.meta.senderAddress = "eden@bottle.cave"
    settings.backups.maxCount = "3"
    settings.backups.cron = "0 0 * * *"

    dao.saveSettings(settings)
})
