const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors')


const pool =require('./db.js');
const app = express();
const port = 8000;

app.use(bodyParser.json());
// const cors = require('cors');
app.use(cors())

// const corsOptions ={
//     origin:'${process.env.REACT_APP_server}/' ,
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

// app.use(cors({
//   origin: '*'
// }));

app.get('/',async(req,res)=>
{
    res.send("ok")
})

app.post('/register', async (req, res) => {
    const { name, email,password } = req.body;
const emailExistsQuery = 'SELECT EXISTS(SELECT 1 FROM register WHERE email = $1)';

const { rows } = await pool.query(emailExistsQuery, [email]);
const emailExists = rows[0].exists;
if (emailExists) {
    res.status(400).json({ error: 'Email already exists.' });
} else {
    try {
        const result = 'INSERT INTO register (name, email, password) VALUES ($1, $2, $3)';
        await pool.query(result, [name, email, password]);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
    }
);
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const loginQuery = 'SELECT * FROM register WHERE email = $1';

    try {
    const { rows } = await pool.query(loginQuery, [email]);
    if (rows.length === 0) {
        res.status(400).json({ error: 'Invalid credentials' });
        return;
    }

    const user = rows[0];
    if (password !== user.password) {
        res.status(400).json({ error: 'Invalid credentials' });
        return;
    }



    res.status(200).json({ message: 'Login successful', userId: user.id });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal server error' });

    }
});

//to fetch userdata

app.get('/userdata/:id', async (req, res) => {
  const userId = req.params.id;

  try {
      const userDataQuery = 'SELECT * FROM userdata WHERE user_id = $1';
      const { rows } = await pool.query(userDataQuery, [userId]);

      res.status(200).json({ userData: rows });
  } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/articles', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM art');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/art', async (req, res) => {
  const { title, content, author } = req.body;
  try {
    await pool.query('INSERT INTO art (title, content, author) VALUES ($1, $2, $3)', [title, content, author]);
    res.status(201).json({ message: 'Article created successfully' });
  } catch (error) {
    console.error('Error creating article:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});







app.delete('/art/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM art WHERE id = $1', [id]);
    res.status(204).send(); // No content response
  } catch (error) {
    console.error('Error deleting article:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint to update an article
app.put('/art/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  try {
    await pool.query('UPDATE art SET title = $1, content = $2, author = $3 WHERE id = $4', [title, content, author, id]);
    res.status(200).json({ message: 'Article updated successfully' });
  } catch (error) {
    console.error('Error updating article:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
