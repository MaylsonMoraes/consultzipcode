const cep = require('cep-promise');
const express = require('express');
const router = express.Router();



router.get('/', async (req, res) => {
        
          const cepParaConsulta = req.body.cep;
          // código do cep-promise
          cep(cepParaConsulta)
            .then((result) => {
              return res.json(result);
            })
            .catch((error) => {
              return res.status(400).json(error);
            });
        });

module.exports = router;


