# skeleton to work with typescript and jest - TDD using mongodb

### Tecnologies
- Languages: `NodeJS` and `TypeScript` and `Docker`
- Framework: `Express`
- Database: `Mongodb`

### Initialize
```sh
npm install # install all the dependecies

copy .env.example .env # create enviroments
```

### Test
```sh
npm run tw #run test in watch mode with flag ----detectOpenHandles

npm run tests #run all tests with flag ----detectOpenHandles

npm run testsc #run all coverage test
```

### Development
```sh
npm run dev # start application in mode development
```

### Production
```sh
npm run build #build application in mode production

npm run start #run application in production
```

### Docker
```sh
docker-compose up -d #deploy a container in production mode
docker-compose down  #stop and delete containers
```