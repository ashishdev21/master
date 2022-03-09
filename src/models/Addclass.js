

const mongoose = require('mongoose');


var teacherSchema = new mongoose.Schema({
    Class_Status: {
        type: Boolean,
        required: true,
        index: true
    },
    className:{
        type: String,
        required: true,
        trim: true
    },
    Title: { 
        type: String,
        required: true 
    },
    
    Description: {
        type: String,
        required: true,
        trim: true
    },

    Faculty: { 
        type: String,
        required: true,
        trim: true
    },
    
    Category: { 
        type: String,
        required: true 
    },

    
    Time: { 
        type: String,
        required: true 
    },

    Type: { 
        type: String,
        required: true,
        trim: true
    },

    Language_pref:{ 
        type: String,
        required: true 
    },
    
    Studio: { 
        type: String,
        required: true 
    },

    Duration: { 
        type: String,
        trim: true
    },
 
    Editor: { 
        type: String,
    },
    
    YT_Privacy_Status:{ 
        type: String,
    },
    
    YT_Channel_Name:{ 
        type: String,
    },
    
    YT_Tags:{ 
        type: String,
    },
    
    YT_Playlist:{ 
        type: String,
    },
    
    YT_Class_Status:{ 
        type: String,
    },
    
    YT_Link:{ 
        type: String,
    },
    
    YT_ID:{ 
        type: String,
    },
    
    YT_Start_Time :{ 
        type: String,
    },
    
    YT_End_Time:{ 
        type: String,
       
    },
    
    YT_Stream_Key:{ 
        type: String,
       
    },

});



module.exports = mongoose.model('Teacher&editor', teacherSchema);

