module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cen0dfun6mpkfa76o660-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'afstore'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'kvTMIzJ0dW622XAqSI7U1XPchgVCsN9G'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
