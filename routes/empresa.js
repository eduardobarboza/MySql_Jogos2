import express from 'express';
import * as Jogos from '../service/empresa.js';

const router = express.Router();

router.get('/jogo', async (req, res) => {
    try {
        let nome = req.query.nome;
        let result;
        if (nome) {
            result = await Jogos.consultar(nome);
        } else {
            result = await Jogos.consultar();
        }
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ erro: 'Nenhum recurso encontrado' });
        }
    } catch (error) {
        // Lidar com erros de forma adequada, por exemplo, retornando um status 500
        console.error('Erro na consulta:', error);
        let erro = { 
            erro: 'Erro interno do servidor', 
            info_erro: error 
        }
        res.status(500).json(erro);
    }
});


router.get('/jogo/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let result = await Jogos.consultarPorId(id);
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ erro: 'Recurso não encontrado' });
        }
    } catch (error) {
        // Lidar com erros de forma adequada, por exemplo, retornando um status 500
        console.error('Erro na consulta por ID:', error);
        let erro = { 
            erro: 'Erro interno do servidor', 
            info_erro: error 
        }
        res.status(500).json(erro);
    }
});


router.post('/jogo',async(req,res)=>{
    try {
        const { id, nome, preço } = req.body; // Supondo que os dados enviados tenham campos 'nome' e 'valorDeMercado'

        // Chamar a função cadastrar com os dados recebidos
        const novoJogo = await Jogos.cadastrar(id, nome, preço);

        // Enviar uma resposta com os dados da nova empresa cadastrada
        res.status(201).json(novoJogo);
    } catch (error) {
        // Lidar com erros de forma adequada, por exemplo, retornando um status 500
        console.error('Erro na consulta por ID:', error);
        let erro = { 
            erro: 'Erro interno do servidor', 
            info_erro: error 
        }
        res.status(500).json(erro);
    }
})

router.put('/jogo/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const { nome, preço } = req.body; // Supondo que os dados enviados tenham campos 'nome' e 'valorDeMercado'

        // Chamar a função cadastrar com os dados recebidos
        const jogoAlterado = await Jogos.alterar(id, nome, preço);

        // Enviar uma resposta com os dados da nova empresa cadastrada
        res.status(201).json(jogoAlterado);
    } catch (error) {
        // Lidar com erros de forma adequada, por exemplo, retornando um status 500
        console.error('Erro na consulta por ID:', error);
        let erro = { 
            erro: 'Erro interno do servidor', 
            info_erro: error 
        }
        res.status(500).json(erro);
    }
})

router.delete('/jogo/:id',async(req,res)=>{
    try{
        let id = req.params.id;
        const result = await jogos.deletar(id);
        if(result.length == 0){
            res.status(204).json([]);
        }
        else{
            res.status(404).json({ erro: 'Recurso não encontrado' })
        }
    } catch (error) {
        // Lidar com erros de forma adequada, por exemplo, retornando um status 500
        console.error('Erro na consulta por ID:', error);
        let erro = { 
            erro: 'Erro interno do servidor', 
            info_erro: error 
        }
        res.status(500).json(erro);
    }
})

export default router;