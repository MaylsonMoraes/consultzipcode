const cep = require('cep-promise');
const express = require('express');
const router = express.Router();
const Cep = require('../models/cep');

class CepController {
    // método do controller que é acessado através de uma rota
    show(req, res) {
      // pego o CEP da requisição do client
      const cepParaConsulta = req.body.cep;
      // código do cep-promise
      cep(cepParaConsulta)
        .then((result) => {
          // retorno dos dados em caso de sucesso
          return res.json(result);
        })
        .catch((error) => {
          // retorno do erro caso exista
          return res.status(400).json(error);
        });
    }
  }
  
  // exportação da classe CepController
  export default new CepController();
  module.exports = router;


