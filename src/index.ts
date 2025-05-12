import express from "express";
import { listEvents } from "./services/event.service";

const app = express();

app.get("/status", (req, res) => {
    res.status(200).send("OK");
});
app.get("/", (req, res) => {
    res.status(200).send("OK");
});

app.get("/events", async (req, res) => {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;
    const result = await listEvents(page, pageSize);
    res.json(result);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});