/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db);
    const admin = new Admin();
    admin.email = "genie@lamp.cave"
    admin.setPassword("opensesame")
    dao.saveAdmin(admin)
}, (db) => { // optional revert
    const dao = new Dao(db);
    try {
        const admin = dao.findAdminByEmail("genie@lamp.cave")
        dao.deleteAdmin(admin)
    } catch (_) { /* most likely already deleted */ }
})
