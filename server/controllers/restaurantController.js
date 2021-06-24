import { Restaurant } from '../models/models.js';

export const getRestaurant = async(req, res) => {
    Restaurant.find()
                .then(restraunt => res.json(restraunt))
                .catch(error => console.error(error))
}

export const getRestaurantWithId = async(req, res) => {

    const {id} = req.params;

    Restaurant.findById(id)
                .then(restraunt => {
                    if(!restraunt)
                    {
                        res.status(404).end()
                    }else{
                        res.json(restraunt)
                    }
                })
                .catch(error => console.error(error))

}

export const addRestaurant = async(req, res) => {
    const  {name, price, location, image} = req.body;

    try {

       const restaurant = new Restaurant({
           name: name,
           price: price,
           location: location,
           image: image
       })

       await restaurant.save()
                        .then(restaurant => res.json(restaurant))
                        .catch(err => console.error(err))

    } catch (error) {
        console.error(error)
    }
}

export const removeRestaurant = async(req, res) => {
    try {
        const { id } = req.params;

        Restaurant.findByIdAndDelete(id)
                  .then(result => {
                      res.status(204).send("successfully deleted")
                    })
                  .catch(err => console.error(err))

    } catch (error) {
        res.status(404).send("Couldn't be deleted")
    }
}
