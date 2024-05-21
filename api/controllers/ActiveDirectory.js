module.exports = app => {
    const ActiveDirectory = require('activedirectory');
    const config = require('config');
    const adConfig = {
            url: process.env.URI ?? config.get('AD.URI'),
            baseDN: process.env.baseDN ?? config.get('AD.BaseDN'),
            username: process.env.adminUsername ?? config.get('AD.AdminUsername'),
            password: process.env.adminPassword ?? config.get('AD.AdminPassword')
    }
    const ldap =  new ActiveDirectory(adConfig);
    return ldap;
}