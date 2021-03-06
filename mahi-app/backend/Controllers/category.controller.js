const Category = require("../models/category.model");

// Create and Save a new Customer
exports.create = (req,res) =>{
    if(!req.body){
        res.status(400).send({
            message:"content cannot be empty"
        });
    }

// Create a Category
const category = new Category({
    name : req.body.name,
    type : req.body.type
});
// Save Category in the database

Category.create(category,(err,data)=>{
    if(err){
        res.stauts(500).send({
            message: err.message || "Some error occurred while retrieving Products."
        })
    }else res.send(data);
});
}

// Retrieve all categories from the database.

exports.findAll = (req,res) => {
    Category.getAll((err,data)=>{
        if(err){
            res.status(500).send({message: err.message || "Some error occurred while retrieving Products."})
        }else res.send(data);
    });
};

// Update a category by id in the database

exports.update = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message :  "Content can not be empty!"
        })
    }
    Category.updateById(req.params.id,new Category(req.body),(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    messsage: `product is not found with that id ${req.params.id}`
                })
            }else{
                res.status(500).send({
                    message: "Error while updating categoryId"+req.params.id
                })
            }
        }else{
            res.status(200).send(data);
        }
    })
}

// delete the category by id from the database
exports.delete =(req,res)=>{
    Category.remove(req.params.id,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: "Product is not found with this id"+req.params.id
                })
            }else{
                res.status(500).send({
                    message : "Error while deleting the product with id"+req.params.id
                })
            }
           
        }else{
            res.stauts(200).send({message:"deleted successfully."})
        }
    })

}


