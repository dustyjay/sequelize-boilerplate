const router = require('express').Router();

const bodyParser = require('body-parser');
import { ServiceController } from '../../controllers';

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
  .get(ServiceController.getServices);

module.exports = router;
