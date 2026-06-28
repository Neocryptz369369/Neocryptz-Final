// Static files + SPA fallback
app.use(express.static(__dirname));
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'index.html')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Neocryptz AI on port', PORT));

// The vital export for Vercel
module.exports = app;
