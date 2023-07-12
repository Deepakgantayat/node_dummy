// import { connect } from 'mongoose';

// let conn;
// export const connectDB = async () => {
//   try {
//     conn = await connect("mongodb+srv://deepakgantayat29:EwMydJq1Bpaj5Mp1@cluster0.hsiamn8.mongodb.net/?retryWrites=true&w=majority");
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const disconnectDB = async () => {
//   if (conn) {
//     await conn.disconnect();
//   }
// };