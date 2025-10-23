import { listen } from './app';
const PORT = process.env.PORT || 3000;

listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});