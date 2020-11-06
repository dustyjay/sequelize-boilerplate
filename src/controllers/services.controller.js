import servicesModel from '../models/services.model';

const getServices = async (req, res) => {
  try {
    const data = await servicesModel.select('id, title, description');
    res.status(200).json({ data: data.rows });
  } catch (error) {
    res.status(200).json({ data: error.stack });
  }
};

const insertService = async (req, res) => {
  const { title, description } = req.body;
  const columns = 'title, description';
  const values = `'${title}', '${description}'`;
  try {
    const data = await servicesModel.insert(columns, values);
    res.status(200).json({ data: data.rows[0] });
  } catch (error) {
    res.status(200).json({ data: error.stack });
  }
};

export default {
  getServices,
  insertService,
};
