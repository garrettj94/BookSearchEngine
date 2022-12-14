
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const {AuthenticationError} = require('apollo-server-express')

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userInfo = await User.findOne({ _id: context.user._id })
          .select('-__V -password')
          .populate('savedBooks')
        return userInfo
      }
      throw new AuthenticationError('You must be logged in to veiw page')
    },

  },
  Mutation: {
    login: async (parent, args) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('You must be logged in to veiw page')
      }

      const token = signToken(user)
      return { token, user }
    },
    addUser: async (parent, args) => {
      const user = await User.add(args);
      const token = signToken(user)
      return { token, user }
    },
    saveBook: async (parent, { savedBook }, context) => {
      if (context.user) {
        const createBook = await User.
          findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { savedBooks: savedBook } },
            { new: true }
          );
        return createBook
      }
      throw new AuthenticationError('You must be logged in to veiw page')
    },
    removeBook: async (parent, { removeBook }, context) => {
      if (context.user) {
        const createBook = await User.
          findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { removeBooks: removeBook } },
            { new: true }
          );
        return createBook
      }
      throw new AuthenticationError('You must be logged in to veiw page')
    },
  }
  }
  


module.exports = resolvers;
