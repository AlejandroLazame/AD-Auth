module.exports = app => {
    const { buscarUsuario } = app.controllers.BuscarUsuario;

    app.route('/api/v1/buscarusuario/:usuario').get(buscarUsuario);
}