module.exports = app => {
    const ldap = app.controllers.ActiveDirectory;
    const controller = {};

    controller.buscarUsuario = (req, res) => {
        const query = `cn=*${req.params}*`;

        console.log(ldap);
        ldap.find(query, (err, results)=> {
            if(err){
                console.error(err);
                res.status(500).json(err);
            }

            if(results.hasOwnProperty('users') === false){
                console.log(results);
                res.status(404).json('❓Usuario nao encontrado.');
            }

            res.status(200).json(results.users);
        })
    }

    return controller;
}