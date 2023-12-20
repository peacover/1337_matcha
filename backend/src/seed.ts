// // seed.ts
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { Client } from 'pg';

// // const configService = new ConfigService();
// // console.log('configService.get(POSTGRES_USER)', configService.get('POSTGRES_USER'));
// // const client = new Client({
// //   user: configService.get('POSTGRES_USER'),
// //   host: configService.get('POSTGRES_HOST'),
// //   database: configService.get('POSTGRES_DB'),
// //   password: configService.get('POSTGRES_PASSWORD'),
// //   port: configService.get('POSTGRES_LOCAL_PORT'),
// // });
// const createTablesAndSeedData = async () => {
//   try {

//     // await client.connect();

//     // await client.query(`
//     //   CREATE TABLE IF NOT EXISTS "user" (
//     //     "id" SERIAL PRIMARY KEY,
//     //     "username" VARCHAR(255) NOT NULL,
//     //     "email" VARCHAR(255) NOT NULL
//     //   );

//     //   INSERT INTO "user" ("username", "email") VALUES
//     //     ('user1', 'user1@example.com'),
//     //     ('user2', 'user2@example.com');
//     // `);
//   } catch (error) {
//     console.error('Error creating tables and seeding data:', error);
//   } finally {
//     // await client.end();
//   }
// };

// createTablesAndSeedData();

// // ts-node -P tsconfig-seed.json -r tsconfig-paths/register --transpileOnly prisma/seed.ts

// var pg = require('pg');
// postgresql://user:password@localhost:5434/nest_db?schema=public
// pg.connect('postgres://test:test@localhost/test', function (err, client, done) {
//   client.query(
//     "CREATE TABLE test (test VARCHAR(255)); INSERT INTO test VALUES('test') ",
//   );
//   done();
// });

// postgresql://{user}:{password}@{host}:{port}/{database}

// const Pool = require("pg").Pool;

// const pool = new Pool({
//   connectionString: "postgresql://peacover:my-password@localhost:5432/datingdb"
// });

// pool.on("connect", () => {
//   console.log("connected to the db");
// });

// // const createTablesAndSeedData = async () => {
// //   try {
// //     await pool.query(`
// //       CREATE TABLE IF NOT EXISTS "user" (
// //         "id" SERIAL PRIMARY KEY,
// //         "username" VARCHAR(255) NOT NULL,
// //         "email" VARCHAR(255) NOT NULL
// //       );`);
// //       } catch (error) {
// //         console.error('Error creating tables and seeding data:', error);
// //       }
// //     }
// // createTablesAndSeedData();

// module.exports = {
//   pool
// };

// --------------------------

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const ret = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'test',
      password: 'test',
    },
  });
  console.log('data inserted : ', ret);
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
