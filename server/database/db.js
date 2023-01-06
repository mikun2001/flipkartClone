import mongoose from "mongoose";

const Connection = async (username, password) => {
	//const URL = `mongodb+srv://${username}:${password}@flipkart.bzgjubd.mongodb.net/?retryWrites=true&w=majority`;
	const URL = process.env.URL;
	console.log("Connnection Function");

	try {
		await mongoose.connect(URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useFindAndModify: false,
		});
		console.log("Database Connected Succesfully");
	} catch (error) {
		console.log("Error during connection: ", error.message);
	}
};

export default Connection;
