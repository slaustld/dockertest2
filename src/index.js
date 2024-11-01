const express = require('express');
const catRoutes = require('./routes/catRoutes');
const path = require('path');

const app = express();
const PORT = 8080;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, '../public')));

// 라우팅
app.use('/cat', catRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
