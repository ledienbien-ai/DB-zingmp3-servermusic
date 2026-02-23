// DIENBIEN MOD - Server nhạc Zing MP3 chạy trên Armbian
//=======================================================
const { ZingMp3 } = require("zingmp3-api-full");
const express = require("express");
const app = express();
const PORT = 5555;

// API Tìm kiếm
app.get("/api/search", async (req, res) => {
    try {
        const q = req.query.q;
        console.log(`🔍 [API 5555] Đang tìm: ${q}`);
        const data = await ZingMp3.search(q);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API Lấy link nhạc
app.get("/api/song", async (req, res) => {
    try {
        const id = req.query.id;
        console.log(`🎵 [API 5555] Lấy link ID: ${id}`);
        const data = await ZingMp3.getSong(id);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Zing API Backend đang chạy tại http://0.0.0.0:${PORT}`);
});
// End - DIENBIEN MOD - Server nhạc Zing MP3 chạy trên Armbian
//============================================================