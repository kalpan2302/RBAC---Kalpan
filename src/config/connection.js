const mongoose = require("mongoose");

const ConnectDB = async () => {

    try {
        //console.log("database URL", process.env.DB_URL);
        const connectionInstance = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`\n Database Connected  !! DB HOST :  ${connectionInstance.connection.host}`)
        console.log(`\n Database Connected  !! DB Name :  ${connectionInstance.connection.name}`)
    } catch (error) {
        console.log("Database Connection Error", error);
        process.exit(1);
    }
}

module.exports = ConnectDB;