import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import https from 'https';

const app = express();

// Enhanced CORS configuration
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Range']
}));

app.use(express.static('.'));

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
});

app.get('/proxy', async (req, res) => {
    try {
        const url = req.query.url;
        const range = req.headers.range;
        
        const response = await fetch(url, {
            agent: httpsAgent,
            headers: {
                'Range': range || 'bytes=0-'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Set streaming headers
        res.writeHead(206, {
            'Content-Type': 'video/mp4',
            'Accept-Ranges': 'bytes',
            'Content-Range': response.headers.get('content-range'),
            'Content-Length': response.headers.get('content-length'),
            'Access-Control-Allow-Origin': '*'
        });

        response.body.pipe(res);
    } catch (error) {
        console.error('Proxy Error:', error);
        res.status(500).json({ error: 'Video streaming failed' });
    }
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
