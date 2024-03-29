# Chronos-Backend

## About

This is a calendar application that lets you keep track of all your events (arrangements, tasks, and reminders).

## Requirements & dependencies

- Node.js (version 16.17.1 or higher)
- NPM (version 9.1.1 or higher)
- MySQL
- Docker (optional)

## Install & run

Prior to setup, create an `.env` file based on the `.env.example` file, and fill in the required vars.
Then proceed:

Locally:

- Install all the required dependencies, listed above.
- Run `npm install` in the root directory of the repository.
- Optionally, to run seeders & migrations, run `npm run migrate`.
- Run `npm start` to start the server.

Via Docker:

- Enter the `api/` directory of the repository.
- Run `docker compose up -d`.
- Optionally, to run seeders, run `docker compose run --rm api node prisma/seeders`

You can now access the API, using the host and port, provided in the `.env` file.
