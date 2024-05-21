module.exports = app => {
    const { ldap } = app.controllers.ActiveDirectory;
    const controller = {};

    controller.buscarUsuario = (req, res) => {
        const { usuario } = req.params;

        ldap.findUser(usuario, (err, usuario)=>{
            if(err) {
                console.error(err);
                res.status(500).json(err);
            }

            res.status(200).json(usuario);
        })
    }

    return controller;
}