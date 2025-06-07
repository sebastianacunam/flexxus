const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = require('./config/server');


dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});