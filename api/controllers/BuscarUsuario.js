module.exports = app => {
    const ldap = app.controllers.ActiveDirectory;
    const controller = {};

    controller.buscarUsuario = (req, res) => {
        const query = `cn=*${req.params}*`;

        console.log(ldap);
        ldap.find(query, (err, results)=> {
            if(err || ! results.users){
                console.error(err);
                res.status(500).json(err);
            }

            res.status(200).json(results.users);
        })
    }

    return controller;
}