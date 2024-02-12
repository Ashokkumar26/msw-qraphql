const User = require("./schema/db_schema")

const Resolvers = {
    getUsers: async () => {
        try {
            return await User.find({})
        } catch(err) {
            throw new Error ("Error message" + err)
        }
    } 
}

module.exports = Resolvers