import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();

// env config sirf ek jagah ho (server.js me), isliye yaha hata de agar chahe toh
dotenv.config({ path: './config/.env' });

dbConnection();

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET"], //  GET allowed
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Root route (Render test ke liye)
app.get("/", (req, res) => {
  res.send("Backend is running fine 🚀");
});

//  Reservation routes
app.use('/api/v1/reservation', reservationRouter);

// Error middleware
app.use(errorMiddleware);

export default app;
