import  pool  from '../data/index.js';

export const consultar = async (filtro = '') => {
    try {
        const cx = await pool.getConnection();
        const cmdSql = `SELECT * FROM jogo WHERE jogo.nome LIKE ?`;
        const [dados, meta_dados] = await cx.query(cmdSql, [`%${filtro}%`]);
        cx.release();
        return dados;
    } catch (error) {
        throw error;
    }
};

export const consultarPorId = async (id) => {
    try {        
        const cx = await pool.getConnection();
        const cmdSql = 'SELECT * FROM jogo WHERE jogo.id = ?';
        const [dados, meta_dados] = await cx.query(cmdSql,[id]);
        cx.release();
        return dados;
    } catch (error) {
        throw error;
    }
};

export const cadastrar = async (nome, preço) => {
    try {
        const cx = await pool.getConnection();
        const cmdSql = 'INSERT INTO jogo(nome, preço) VALUES (?, ?)';
        const [execucao] = await cx.query(cmdSql, [nome, preço]);        
        if(execucao.affectedRows > 0){
            const [result] = await cx.query('SELECT LAST_INSERT_ID() as lastId');
            const lastId = result[0].lastId;
            const [novoJogo, meta_dados] = await cx.query('SELECT * FROM jogo WHERE id = ?', [lastId]);
            cx.release();
            return novoJogo;
        }
        cx.release();
        return execucao;

    } catch (error) {
        throw error;
    }
};

export const alterar = async (id, nome, preço) => {
    try {
        const cx = await pool.getConnection();
        const cmdSql = 'UPDATE jogo SET nome = ?,preço = ? WHERE id = ?';
        const [execucao] = await cx.query(cmdSql, [nome, preço, id]);
        if(execucao.affectedRows > 0){            
            const [jogoAlterado, meta_dados] = await cx.query('SELECT * FROM jogo WHERE id = ?', [id]);
            cx.release();
            return jogoAlterado;
        }
        cx.release();
        return execucao;
    } catch (error) {
        throw error;
    }
};

export const deletar = async (id) => {
    try {
        const cx = await pool.getConnection();
        const cmdSql = 'DELETE FROM jogo WHERE id = ?';
        const [execucao] = await cx.query(cmdSql, [id]);
        if(execucao.affectedRows > 0){ 
            cx.release();
            return [];
        }        
        cx.release();
        return 'Recurso não foi encontrado';
    } catch (error) {
        throw error;
    }
};


