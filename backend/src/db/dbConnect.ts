import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.DB_URL}/projectsDb`
    );

    console.log("db is connected", connection.connection.host);
  } catch (error) {
    console.error(error);
    return;
  }
};

export { dbConnect };
