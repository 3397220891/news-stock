const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;
const NEWS_API_KEY = '2e3e6de4516f4ef1ba33dead4bb20390';

app.use(cors());

// 获取财经新闻
app.get('/api/news', async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        category: 'business',
        language: 'en',
        apiKey: NEWS_API_KEY,
        pageSize: 20
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: '获取新闻失败', details: error.message });
  }
});

// 预留：根据新闻推荐股票
app.get('/api/recommend', (req, res) => {
  res.json({ message: '推荐功能开发中...' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
