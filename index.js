import express from 'express';
import renderApi from '@api/render-api';

const app = express();
const PORT = process.env.PORT || 3000;

// התחברות ל-Render API
renderApi.auth('rnd_Uuqs0mTm6sN7zXxOz8mAoOeOlH20');

// מסלול שמחזיר את רשימת ה-Services שלך ב-Render
app.get('/services', async (req, res) => {
  try {
    const { data } = await renderApi.listServices({ includePreviews: 'true', limit: '20' });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

// מסלול ברירת מחדל
app.get('/', (req, res) => {
  res.send('Hello from Render!');
});

// מאזין לפורט הנדרש
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
