const PG_PW = process.env.PG_PASSWORD
const PG_US= process.env.PG_USER
module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'dpg-cen0dfun6mpkfa76o660-a.frankfurt-postgres.render.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'afstore'),
        user: env('DATABASE_USERNAME', PG_US),
        password: env('DATABASE_PASSWORD', PG_PW),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  });