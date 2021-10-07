const mongoose = require('mongoose');
const bcrypt= require('bcryptjs');

var userSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required: 'Name cannot be empty',
            unique: true,
        },
        password:{
            type:String,
            required: 'Password cannot be empty',
            minlength: [4, 'Password must be atleast 4 character long']
        },
        saltSecret: String

    }
);


userSchema.pre('save', function(next){
    bcrypt.genSalt(10, (err,salt) =>{
        bcrypt.hash(this.password, salt, (err,hash)=>{
            this.password=hash;
            this.saltSecret=salt;
            next();
        })
    }
    )
});


//Map a model with a schema
mongoose.model('User', userSchema);