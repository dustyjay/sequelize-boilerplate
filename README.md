# Sequelize Boilerplate

This template was created using Node, Express, Postgresql

## Run yarn

- Run `yarn` on your terminal (from the project's root directory)
  - This would install all dependencies

## Create your env file

- Create a file `.env` in your root directory
- Add your environment variables
  Sample:
  `PORT=3000`
  `CONNECTION_STRING="postgresql://your_username:your_password@localhost:5432/seq-boilerplate"`
  - PS: Take note of the string quotes in your `CONNECTION_STRING` value

## Create your DB

- Run `createdb db_name` (In this case is `seq-boilerplate`) on your terminal
- Run `psql ( enter the password for postgressql)`
- To provide the privileges to the postgres user
- `$ alter user testuser with encrypted password 'qwerty';`
- `$ grant all privileges on database db_name to testuser;`
- For more info, check [![here](https://stackoverflow.com/a/30642050)](here)

## Run Migrations

- Create your database (In this case is `seq-boilerplate`)
- `npx sequelize-cli db:migrate`

## Run Seeds

- `npx sequelize-cli db:seed:all`

* This would populate your db with the dummy data available in `src/seeders`

## Run your App

- Run `yarn dev` to start up the dev server
- Open up your postman and check `127.0.0.1/api/services to view your seeded data
- Ta da 🎉
