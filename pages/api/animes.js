import { db_config } from '../../lib/db'
import mysql from 'mysql'
export default (req, res) => {
  const db = mysql.createConnection(db_config)
  db.connect()
  db.query('SELECT * FROM `animes` JOIN anime_status ON status_n=status', (error, results) => {
    if (error) throw error;
    res.json(results)
  });
  db.end()
}