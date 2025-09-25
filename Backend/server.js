const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const { init } = require('./utils/socket');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const chatRoutes = require('./routes/chatRoutes');
const storyRoutes = require('./routes/storyRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = init(server);

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/stories', storyRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
