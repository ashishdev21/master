// Model
const teacherSchema = require('../models/Addclass');




module.exports = async (req, res) => {
    // ====================================================================================
    // Get Inputs
    const input_title = req.body.Title
    const input_category = req.body.Category
    const input_description = req.body.Description
    const input_className = req.body.className
    const input_Faculty = req.body.Faculty
    const input_Time = req.body.Time
    const input_Type = req.body.Type
    const input_Language_pref = req.body.Language_pref
    const input_Studio = req.body.Studio
    const input_Class_Status = req.body.Class_Status
    // ====================================================================================


    // ====================================================================================
    // Validate Pricing Rules
    // if(input_regular_price < input_sale_price) {
    //     return res.json({'statusCode':409, 'data':'Regular price cannot be less than sale price!'})
    // }
    // ====================================================================================


    // ====================================================================================
    // Loop All Categories
    // for (let index = 0; index < input_category.length; index++) {
    //     let categoryElem = input_category[index]

    //     const categoryObj = await DB_Category.findById(categoryElem)
    //     if(!categoryObj) {
    //         return res.json({'statusCode':409, 'data':'Could not find selected category!'})
    //     }
    // }
    // ====================================================================================



    // ====================================================================================
    //const input_final_is_ebook = (input_is_ebook == "Yes") ? true : false

    // Payload for Book
    const payloadData = {
        'Title': input_title,
        'Category': input_category,
        'Description': input_description,
        'className': input_className,
        'Faculty': input_Faculty,
        'Time': input_Time,
        'Type': input_Type,
        'Language_pref': input_Language_pref,
        'Studio': input_Studio,
       'Class_Status':input_Class_Status
    }
    const bookObj = await teacherSchema.create(payloadData)
    if(!bookObj) {
        return res.json({'statusCode':409, 'data':'Error while adding book, try again!'})
    }
    // ====================================================================================


    // Responce
    return res.json({'statusCode':200, 'data':'Book Added!'})
}