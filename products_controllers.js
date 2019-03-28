module.exports = {
    create: (req, res, next) => {
        const {name, description, price, image_url} = req.body
        req.app.get('db')
        .create_product([name, description, price, image_url])
        .then(() => {
            res.status(200).send('product created')
        }).catch(err => {
            res.status(500).send({errorMessage: 'create error'})
            console.log(err)
        })
    },
    getOne: (req, res, next) => {
        const {id} = req.params
        req.app.get('db')
        .read_product(id)
        .then((product) => {
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send({errorMessage: 'get one error'})
            console.log(err)
        })
    },
    getAll: (req, res, next) => {
        req.app.get('db')
        .read_products()
        .then((products) => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send({errorMessage: 'get all error'})
            console.log(err)
        })
    },
    update: (req, res, next) => {
        const {id} = req.params
        const {desc} = req.query
        req.app.get('db')
        .update_product([id, desc])
        .then(() => {
            res.status(200).send('user updated')
        }).catch(err => {
            res.status(500).send({errorMessage: 'update error'})
            console.log(err)
        })
    },
    delete: (req, res, next) => {
        const {id} = req.params
        req.app.get('db')
        .delete_product(id)
        .then(() => {
            res.status(200).send('user deleted')
        }).catch(err => {
            res.status(500).send({errorMessage: 'delete error'})
            console.log(err)
        })
    }

}