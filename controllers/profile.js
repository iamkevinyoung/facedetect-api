const handleProfileGet = (req, res, db) => {
    const {
        id
    } = req.params;
    db.select('*').from('users').where({
            id
        }) //where({id : id}) same thing
        .then(user => {
            if (user.length) { //if length of the user array in the database is not zero
                res.json(user[0]);
            } else {
                res.status(400).json('Not found');
            }
        })
        .catch(err => res.status(400).json('Error getting user'))
}

module.exports = {
    handleProfileGet
}