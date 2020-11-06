export const createServicesTable = `
DROP TABLE IF EXISTS services;
CREATE TABLE IF NOT EXISTS services (
  id SERIAL PRIMARY KEY,
  title VARCHAR DEFAULT '',
  description VARCHAR NOT NULL
  )
  `;

export const insertServices = `
INSERT INTO services(title, description)
VALUES ('CREATIVE DIRECTION', 'Creative Directors play a key role in design and production, as well as in brands and companies. We are responsible for, and leaders of, a group of creatives (art directors, copywriters, designers, photographers, video producers, etc.). We conduct the entire production and make sure everything is running smoothing.'),
      ('Casting', 'In pre-production, we liaise with our clients to assist them in assembling the perfect cast for the roles e.g. voice overs, actors, models etc.')
`;

export const dropServicesTable = 'DROP TABLE services';
