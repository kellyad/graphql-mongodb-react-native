const resolveFunctions = {
  RootQuery: {
    president(_, { name }, ctx) {
      const president = new ctx.constructor.President();
      return president.findPresident(name);
    },
    users(_, { first_name }, ctx) {
      const user = new ctx.constructor.User();
      return user.findUser(first_name);
    },

  },
};

module.exports = resolveFunctions;
