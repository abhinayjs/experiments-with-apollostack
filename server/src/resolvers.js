module.exports = {
    Query: {
        launches: async(_, __, { datasources }) => datasources.launchAPI.getAllLaunches(),
        launch: (_, { id }, { datasources }) => datasources.launchAPI.getLaunchById({ launchId: id}),
        me: async(_, __, { datasources }) => datasources.userAPI.findOrCreateUser(),
    },
};