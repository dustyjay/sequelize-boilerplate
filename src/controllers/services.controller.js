const Services = require('../models').Services;

module.exports = {
  async getAllServices(req, res) {
    try {
      const collection = await Services.findAll();
      res.status(200).send(collection);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  async getService(req, res) {
    try {
      const { id } = req.params;
      const collection = await Services.findOne({
        id,
      });

      if (collection) {
        res.status(200).send(collection);
      } else {
        res.status(404).send('Services Not Found');
      }
    } catch (e) {
      res.status(500).send(e);
    }
  },
  async createService(req, res) {
    const { title, description } = req.body;
    try {
      const collection = await Services.create({
        title,
        description,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      res.status(201).send(collection);
    } catch (e) {
      res.status(400).send(e);
    }
  },
  async updateService(req, res) {
    try {
      const { id, title, description } = req.body;
      const collection = await Services.findOne({
        id,
      });

      if (collection) {
        const updatedCollection = await Services.update({
          title,
          description,
          updatedAt: new Date(),
        });

        res.status(200).send(updatedCollection);
      } else {
        res.status(404).send('Service Not Found');
      }
    } catch (e) {
      res.status(500).send(e);
    }
  },
};
