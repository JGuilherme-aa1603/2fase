const db = require('../database.js');

exports.createPessoa = (req, res) => {
    const { nome, email, senha, redesocial } = req.body;
    const sql = 'INSERT INTO pessoas (nome, email, senha, redesocial) VALUES (?, ?, ?, ?)';

    db.run(sql, [nome, email, senha, redesocial], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(201).json({ id: this.lastID });
    });
};

exports.getAllPessoas = (req, res) => {
    const sql = 'SELECT * FROM pessoas';

    db.all(sql, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json(rows);
    });
};

exports.getPessoasById = (req, res) => {
    const { id } = req.params;

    const sql = 'SELECT * FROM pessoas WHERE id = ?';
    db.get(sql, [id], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!rows) {
            return res.status(404).json({ message: 'Pessoa não encontrada' });
        }

        res.json(rows);
    });
};

exports.updatePessoa = (req, res) => {
    const { id } = req.params;
    const { nome, email, senha, redesocial } = req.body;

    const sql = 'UPDATE pessoas SET nome = ?, email = ?, senha = ?, redesocial = ? WHERE id = ?';
    db.run(sql, [nome, email, senha, redesocial, id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (this.changes === 0) {
            return res.status(404).json({ message: 'Pessoa não encontrada' });
        }
        
        res.json({ message: 'Pessoa atualizada com sucesso' });
    });
};

exports.deletePessoa = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM pessoas WHERE id = ?';
    
    db.run(sql, [id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (this.changes === 0) {
            return res.status(404).json({ message: 'Pessoa não encontrada' });
        }

        res.json({ message: 'Pessoa deletada com sucesso' });
    });
}
