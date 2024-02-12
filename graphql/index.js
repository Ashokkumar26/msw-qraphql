const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const mongoose = require("mongoose")
const cors = require("cors")

const graphql_schema = require("./schema/graphql_schema")
const graphql_resolvers = require("./resolver")
const User = require("./schema/db_schema")


const app = express()
app.use(cors())

mongoose.connect("mongodb+srv://ashokkumar:OP8G3Uckv5O6ONI9@cluster0.wbtkj2q.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("Connected to mongoDB"))


app.use("/graphql", graphqlHTTP({
    schema: graphql_schema,
    rootValue: graphql_resolvers,
    graphiql: true
}))

app.listen(5000, ()=>{
    console.log("Server running on http://localhost:5000")
})