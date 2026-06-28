'use strict';
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static files + SPA fallback
app.use(express.static(__dirname));
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// Export for Vercel
module.exports = app;
