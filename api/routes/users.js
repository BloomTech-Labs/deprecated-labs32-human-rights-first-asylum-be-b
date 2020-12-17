const router = require('express').Router();
const bcrypt = require('bcrypt');
const usersDal = require('../dal/users');

// GET requests

router.get('/', async (req, res) => {
  try {
    const users = await usersDal.getUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersDal.getUserById(id);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

// POST requests
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, password, email } = req.body;
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    if (firstName && lastName && password && email) {
      const salt = bcrypt.genSaltSync(parseInt(rounds));
      const hash = bcrypt.hashSync(password, salt);
      const permissions_flag = req.body.permissions_flag
        ? req.body.permissions_flag
        : 0;
      const date = new Date();
      const formattedDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
      const user = {
        firstName,
        lastName,
        password: hash,
        email,
        permissions_flag,
        date_created: formattedDate,
      };
      console.log(user);
      const createdUser = await usersDal.createUser(user);
      res.status(201).json(createdUser);
    } else {
      res.status(409).json({ error: 'unrecognized fields' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'something went wrong' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await usersDal.getUserByEmail(email);
      const comparePassword = bcrypt.compare(password, user[0].password);
      if (await comparePassword) {
        res.status(200).json({ success: 'passwords match' });
      } else {
        res.status(401).json({ error: 'mismatched passwords' });
      }
    } else {
      res.status(409).json({ error: 'unrecognized fields' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'something went wrong' });
  }
});

// PUT requests

// TODO: finish this route
router.put('/edit_profile/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, password, email, permissions_flag } = req.body;
    if (firstName && lastName && password && email && permissions_flag) {
      const updatedUser = await usersDal.updateUser({
        id,
        firstName,
        lastName,
        password,
        email,
        permissions_flag,
      });
      console.log(updatedUser);
      res.status(200).json(updatedUser);
    } else {
      res.status(409).json({ error: 'unrecognized fields' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

// DELETE requests
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const deletedUser = await usersDal.deleteUser(id);
      console.log(deletedUser);
      res.status(200).json({ success: `deleted user with id: ${id}` });
    } else {
      res.status(409).json({ error: 'missing parameters' });
    }
  } catch (err) {
    res.status(500).json({ error: 'server error' });
  }
});

module.exports = router;
