module.exports = app => {
    const { buscarGrupo } = app.controllers.BuscarGrupo;

    app.route('/api/v1/buscargrupo/:grupo').get(buscarGrupo);
}