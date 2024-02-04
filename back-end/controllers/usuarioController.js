const DB = require('../database/index');
const tabela = 'usuario';

async function listar(){
    return await DB.execute(`SELECT * FROM ${tabela};`);
}

async function listarUM(id){
    return await DB.execute(`SELECT * FROM ${tabela} WHERE brand_id = ${id};`);
}

async function cadastrar(data){
    try{
        const linha = await DB.execute(`INSERT INTO ${tabela} (usuario_email) VALUES ('${data.usuario_email}');`);
        return listarUM(linha.insertId);
    } catch(error){
        return{
            type: 'error',
            message: `Erro ao inserir dados: ${error.message}`
        }
    }
};

async function deletar(id){
    try{
        if(!id){
            throw new Error('usuario_id é obrigatório');
        }
        await DB.execute(`DELETE FROM ${tabela} WHERE brand_id = ${id}`);
        return {
            type: 'error',
            message: 'Dados apagados com sucesso!'
        }
    } catch (error){
        return{
            type: 'error',
            message: `Deu ruim: ${error}`
        }
    }
}

async function logar(data){
    try{
        if(!data.email){
            throw new Error('Email é obrigatório');
        }
        if(!data.password){
            throw new Error('Senha é obrigatório');
        } else {
            return {
                type: 'warning',
                message: 'Usuário ou senha estão incorretos'
            }
        }
    } catch (error){
        return{
            type: 'error',
            message: error.message
        }
    }
}

module.exports = {
    logar,
    listar,
    listarUM,
    cadastrar,
    deletar
}