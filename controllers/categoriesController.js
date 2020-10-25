const categoriesModel = require("../models/categoriesModel");

module.exports = {
    getAll: async (req, res, next) => {
        const category = await categoriesModel.find({});
        res.status(200).json({status: "success", message: "Getting all categories!", data: category});
    },
    getById: async (req, res, next) => {
        const category = await categoriesModel.findBydIdAndValidate(req.params.id);
        res.status(200).json({status: "success", message: "Getting category:"+ req.params.name, data: category});
        
    },
    create: async (req, res, next) => {
        try{
            const category = await categoriesModel.pre('save', function(){
                this.$locals.start = Date.now();
                console.log('Category save: ', req.params.name);
            });
            if(category.error){
                res.json(categoria);
                return;
            }
            const document = category.post('save', function() {
                console.log('Saved in ', Date.now() - this.$locals.start,'ms');
            })

            res.status(201).json({status: "success", message: "Category Created: "+ req.params.name, data: document});

        }catch(e){
            console.log(e)
            e.status=204;
            next(e);
        }
    },
    update: async (req, res, next) => {
        try{
            console.log(req.params.id, req.body);
            const category = await categoriesModel.update({ _id: req.params.id }, req.body, { multi: false })
            res.status(200).json({status: "success", message: "Category Updated:"+ req.params.name, data: category});
        }catch(e){
            next(e)
        }
    },
    delete: async (req, res, next) => {
        try{
            console.log(req.params.id);
            const category = await categoriesModel.deleteOne({ _id: req.params.id });
            res.status(200).json({status: "success", message: "Category Deleted:"+ req.params.name, data: category});
        }catch(e){
            next(e)
        }
    }
}