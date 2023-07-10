const express = require('express')
const College = require('../model/collegeSchema.js')
const router = express.Router()



// router.post('/addcollege', async (req,res)=>{
//     try {
//     const newCollege = new collegeModel(req.body)
//     await newCollege.save().then(()=>{
//     res.status(201).json({message: "College Added Successfully"})
//     })
//     } catch (error) {
//     // res.status(400).json({err: err})
//     console.log(error)
//     }
// })

router.post('/', async(req,res)=>{
    const {name,address,placement_ratio,average_ratio , cuttOff , website , autonomous , rank} = req.body

    try {
        const collegeAdded = await College.create({
        name:name,
        address:address,
        placement_ratio:placement_ratio,
        average_ratio:average_ratio,
        cuttOff: cuttOff,
        website:website,
        autonomous: autonomous,
        rank: rank
        });

        res.status(201).json({collegeAdded})
    } catch (error) {
        // console.log(error)
        res.status(400).json({error: error.message})
    }
})

//GET ALL COLLEGE /SHOW
router.get('/', async (req,res)=>{
    try {
    const showAll = await College.find()
    res.status(201).json({showAll})
    } catch (error) {
        // console.log(error)
        res.status(400).json({error: error.message})
    }
})

router.get('/' , async (req,res)=>{
    try {
        const allColleges = await College.find()
        res.status(200).json({allColleges})
    } catch (error) {
        console.log(error)
    }
})

//GET single uer

router.get('/college/:id' , async (req,res)=>{
    const {id} = req.params
    try {
        const singleCollege = await College.findById({_id:id})
        res.status(200).json({singleCollege})
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }
})

router.get('/college/:id', async (req,res)=>{
    const id = req.params.id
    let college
    try {
        college = await collegeModel.findById(id)
        res.status(200).json({college})
    } catch (error) {
        console.log(error)
    }
})

router.get('')

// DELETE COLLEGE BY ID

router.delete('/:id' , async (req,res)=>{
    const {id} = req.params
    try {
        const deleteCollege = await College.findByIdAndDelete({_id:id})
        res.status(200).json({deleteCollege})
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }
})

router.delete('/deletecollege/:id', async (req,res)=>{
    const {id} = req.params
    try {
        const deleteCollege = await collegeModel.findByIdAndDelete(id).then(()=>{
            res.status(201).json({message: "Delete Successfully"})
        })
    } catch (error) {
        console.log(error)
    }
})

//Update by Id 

router.patch('/:id' , async (req,res)=>{
    const {id} = req.params
    const {name,address,placement_ratio,average_ratio , cuttOff , website , autonomous , rank} = req.body
    try {
        const editCollege = await College.findByIdAndUpdate(id, req.body , {new: true})
        res.status(200).json({editCollege})
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }
})

router.patch('/updatecollege/:id' , async (req,res)=>{
    const {id} = req.params;
    const {name,address,placement_ratio,average_ratio , cuttOff , website , autonomous , rank } = req.body

    try {
        const college = await collegeModel.findByIdAndUpdate(id , {name,address,placement_ratio,average_ratio , cuttOff , website , autonomous , rank})
        await college.save().then(()=>{
            res.status(200).json({message: "Updated Successfully"})
            // res.status(200).json({book})
        })
        
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;