const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList} = require("graphql");
const TweetType = require("./TweetType");

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLID},
    username: {type: GraphQLString},
    name: {type: GraphQLString},
    tweets: {
      type: new GraphQLList(TweetType),
      resolve(parent, args) {
        return null; // TODO
      }
    },
    following: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return null; // TODO
      }
    },
    followers: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return null; // TODO
      }
    },
  })
});

module.exports = UserType;