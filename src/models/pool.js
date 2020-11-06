import { Pool } from 'pg';
import { CONNECTION_STRING } from '../settings';

export const pool = new Pool({ connectionString: CONNECTION_STRING });
