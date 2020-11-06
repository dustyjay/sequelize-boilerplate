import { pool } from '../models/pool';
import {
  createServicesTable,
  dropServicesTable,
  insertServices,
} from './queries';

export const executeQueryArray = async (arr) => new Promise((resolve) => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropServicesTable ]);
export const createTables = () => executeQueryArray([ createServicesTable ]);
export const insertIntoTables = () => executeQueryArray([ insertServices ]);
