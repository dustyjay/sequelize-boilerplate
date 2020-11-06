import { ServiceController } from '../../controllers';
import { modifyMesaage, performAsyncAction } from '../../middleware';

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
  .get(performAsyncAction, ServiceController.getServices)
  .post(modifyMesaage, performAsyncAction, ServiceController.insertService);

module.exports = router;
