# Graffy Demo

This demo is built to understand how Graffy works. We're going to build the simple CRUD application.

## Server

Server is built using Prisma2 with a SQLite database. It contains `users` and `posts` table. Refer the `server/prisma/schema.prisma` for how the schema is designed. Both tables are related.

### Setup

This is a mono repo

```
yarn
yarn workspace server start
```

This will start the `localhost` server on port `3001`.
