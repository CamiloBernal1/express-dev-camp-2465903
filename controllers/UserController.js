const { DataTypes, ValidationError } = require('sequelize')
const UserModel = require('../models/user')
const sequelize = require('../config/seq')
//Objeto User:
const User = UserModel(sequelize , DataTypes)

exports.getAllUsers = async (req, res)=>{

    try {
       
        const allUsers = await User.findAll()
        console.log(allUsers)
        res 
            .status(200)
            .json({
                "success" : true,
                "data": allUsers
            })
    } 
    catch (error) { 
        res.status(400).json({
            "success": false,
            "errors": "Error de servidor"
        })
    }
}
exports.getSingleUser = async  (req, res)=>{
    try {
        const singleUser = await User.findByPk(req.params.id)
        if(!singleUser){
            res.status(400).json({
                "success": false,
                "errors": "usuario no encontrado"
            })
        }
        else{

            res 
            .status(200)
            .json({
                "success" : true,
                "data": singleUser
            }) 
        }
    } 
    catch (error) {
    }
}

exports.createUser = async (req , res)=>{
    try {
        //grabar usuario
        const newUser = await User.create(req.body) 
        //enviar response del nuevo user
        res
            .status(201)
            .json({
                "success" : true,
                "data": newUser
            })
    } catch (error) {
        if(error instanceof ValidationError){
            const msg_errores = error.errors.map(errorItem =>errorItem.message )
            res.status(422).json({
                "success": false,
                "errors": msg_errores
            })
        }
        else{
            res.status(400).json({
                "success": false,
                "errors": "Error de servidor"
            })
        }
    }
}

exports.updateUser = async (req , res)=>{
    try {
        const singleUser = await User.findByPk(req.params.id)
        if(!singleUser){
            res.status(400).json({
                "success": false,
                "errors": "usuario no encontrado"
            })
        }else{
            await User.update(req.body,{
                where:{
                    id: req.params.id
                }
            })
            const updateUser = await User.findByPk(req.params.id)
            res 
            .status(200)
            .json({
                "success" : true,
                "data": updateUser 
            })
        }
    } catch (error) {
        if(error instanceof ValidationError){
            const msg_errores = error.errors.map(errorItem =>errorItem.message )
            res.status(422).json({
                "success": false,
                "errors": msg_errores
            })
        }
        else{
            res.status(400).json({
                "success": false,
                "errors": "Error de servidor"
            })
        }
    }
}

exports.deleteUser = async (req , res)=>{
    try {
        const singleUser = await User.findByPk(req.params.id)
        if(!singleUser){
            res.status(400).json({
                "success": false,
                "errors": "usuario no encontrado"
            })
        }else{
            await User.destroy(req.body,{
                where:{
                    id: req.params.id
                }
            })
            const updateUser = await User.findByPk(req.params.id)
            res 
            .status(200)
            .json({
                "success" : true,
                "data": updateUser 
            })
        }

    } catch (error) {
        if(error instanceof ValidationError){
            const msg_errores = error.errors.map(errorItem =>errorItem.message )
            res.status(422).json({
                "success": false,
                "errors": msg_errores
            })
        }
        else{
            res.status(400).json({
                "success": false,
                "errors": "Error de servidor"
            })
    }

    

    await User.destroy({
        where: {
            id: req.params.id
        }
      });
    res 
        .status(200)
        .json({
            "success" : true,
            "data": singleUser
        })
}