const { ApolloServer} =  require('apollo-server');
const typeDefs = require('./schema');

const { craeteStore } = require('./utils');
const LaunchAPI = require('./datasources/launch');
const UserAPI = require('./datasources/user');

const store = craeteStore();

const server = new ApolloServer({
    typeDefs,
    dataSources: () => ({
        launchAPI: new LaunchAPI(),
        userAPI: new UserAPI({store}),
    })
}); 

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});