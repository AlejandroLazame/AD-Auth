module.exports = app => {
    const { autenticarUsuario } = app.controllers.AutenticarUsuario;

    app.route('/api/v1/autenticarusuario').post(autenticarUsuario);
}