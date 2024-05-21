module.exports = app => {
    const ActiveDirectory = require('activedirectory');
    const config = require('config');
    const controller = {};
    controller.ldap = () => {
        const adConfig = {
            url: process.env.URI ?? config.get('AD.URI'),
            baseDN: process.env.baseDN ?? onfig.get('AD.baseDN'),
            username: process.env.adminUsername ?? onfig.get('AD.adminUsername'),
            password: process.env.adminPassword ?? onfig.get('AD.adminPassword')
        }
        return new ActiveDirectory(adConfig);
    }
    return controller;
}