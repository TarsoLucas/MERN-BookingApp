import express from 'express';
import Hotel from '../models/Hotel.js';

const router = express.Router();

//CREATE
router.post('/', async (req,res)=>{
    const newHotel = new Hotel(req.body);
    
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel); 
    } catch (error) {
        res.status(500).json(err);
    }
})
//UPDATE
router.put('/:id', async (req,res)=>{    
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, 
            { $set: req.body },
            { new: true });
        res.status(200).json(updatedHotel); 
    } catch (error) {
        res.status(500).json(err);
    }
})
//DELETE
router.delete('/:id', async (req,res)=>{    
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json('Hotel deleted'); 
    } catch (error) {
        res.status(500).json(err);
    }
})
//GET
router.get('/:id', async (req,res)=>{    
    try {
        const getHotel = await Hotel.findById(req.params.id);
        res.status(200).json(getHotel); 
    } catch (error) {
        res.status(500).json(err);
    }
})
//GET ALL
router.get('/', async (req,res)=>{    
    try {
        const allHotels = await Hotel.find();
        res.status(200).json(allHotels); 
    } catch (error) {
        res.status(500).json(err);
    }
})

export default router;