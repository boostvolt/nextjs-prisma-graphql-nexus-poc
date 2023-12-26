# Getting started

## 1. Download example and install dependencies

Clone this repository:

```
git clone git@github.com:boostvolt/nextjs-prisma-graphql-nexus-poc.git
```

Install npm dependencies:

```
cd nextjs-prisma-graphql-nexus
npm install
```

## 2. Create and seed the database

Run the following command to create your SQLite database file. This also creates the `User` and `Post` tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

### Development

```
npm run prisma:dev
```

### Production

```
npm run prisma:deploy
```

When the command is executed against a newly created database, seeding is also triggered. The seed file in [`prisma/seed.ts`](./prisma/seed.ts) will be executed and your database will be populated with the sample data.

## 3. Generate GraphQL schema and collection

Run the following command to automatically generate a GraphQL schema and collection based on the specified [`mutations`](./graphql/mutations/), [`queries`](./graphql/queries/) and [`types`](./graphql//types/).

```
npm run generate
```

## 4. Start the app

```
npm run dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.

# References

## Next.js

[Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

[Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Prisma

[Prisma Documentation](https://www.prisma.io/docs/) - learn about Prisma features.

[Prisma Getting started](https://www.prisma.io/docs/getting-started) - getting started with Prisma.

## GraphQL

[GraphQL](https://graphql.org/) - the specification for GraphQL

[GraphQL Code Generator](https://www.graphql-code-generator.com/) - read more about the generation of the schemas

[Nexus](https://nexusjs.org) - the code first GraphQL schema construction used in this project

[Nexus Prisma](https://nexus.prisma.io) - the official Prisma plugin for Nexus

[Apollo](https://www.apollographql.com/) - the GraphQL client used in this project
