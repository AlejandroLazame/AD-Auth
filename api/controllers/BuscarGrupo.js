module.exports = app => {
    const { ldap } = app.controllers.ActiveDirectory;
    const controller = {};

    controller.buscarGrupo = (req, res) => {
        const { grupo } = req.params;

        ldap.findGroups(grupo, (err, grupos)=> {
            if(err){
                console.error(err);
                res.status(500).json(err);
            }

            res.status(200).json(grupos);
        })
    }
    
    return controller;
} 