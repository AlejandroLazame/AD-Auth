module.exports = app => {
    const ldap = app.controllers.ActiveDirectory;
    const controller = {};
    console.log(ldap);
    controller.autenticarUsuario = (req, res) => {
        const { username, password } = req.body;

        ldap.authenticate(username, password, (err, auth)=> {
            if(err){
                console.error(err);
                res.status(500).json(err);  
            }
            
            res.status(200).json('✅ Usuario autenticado com sucesso!');
        })
    }

    return controller;
}