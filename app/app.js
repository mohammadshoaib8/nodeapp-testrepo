const express = require('express');
const { Pool } = require('pg');
const client = require('prom-client'); // <-- import prom-client

const app = express();
const port = process.env.PORT || 3000;

// Prometheus default metrics
client.collectDefaultMetrics();

const pool = new Pool({
  host: process.env.DB_HOST || 'postgres',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'mydb',
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() as now');
    res.json({ message: 'Hello from Node.js on EKS', time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error', details: err.message });
  }
});

app.get('/health', (req, res) => res.send('ok'));

// New /metrics endpoint for Prometheus
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(port, () => console.log(`App listening on ${port}`));
