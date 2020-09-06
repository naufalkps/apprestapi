'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API Berjalan", res);
};

//menampilkan semua data mahasiswa
exports.tamplsemuamahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, filed) {
        if (error) {
            connection.log(error);
        } else
            response.ok(rows, res)
    });
};
