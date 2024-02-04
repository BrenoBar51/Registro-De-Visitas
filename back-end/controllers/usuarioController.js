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
    logar
}