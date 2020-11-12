import ServicesController from '../../controllers/services.controller';

const router = require('express').Router();

const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.use((req, res, next) => {
  // inject default headers
  res.header('Content-Type', 'application/json');
  res.header('cache-control', 'private, max-age=0');
  next();
});

router
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    next();
  })
  .get(ServicesController.getAllServices);

router
  .route('/:id')
  .all((req, res, next) => {
    res.statusCode = 200;
    next();
  })
  .get(ServicesController.getService);
module.exports = router;
