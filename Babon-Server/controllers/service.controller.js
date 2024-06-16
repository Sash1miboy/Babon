import Service from "../models/service.model.js";
import createError  from "../utils/createError.js";


export const createService = async (req, res, next)=>{
    if(!req.isSeller) return next (createError(403, "Only sellers can create a service!"));

    const newService = new Service({
        userId: req.userId,
        ...req.body,
    });

    try {
        const savedService = await newService.save();
        res.status(201).json(savedService);
    } catch (err) {
      next(err)  
    }
};
export const deleteService = async (req, res, next)=>{};
export const getService = async (req, res, next)=>{};
export const getServices = async (req, res, next)=>{};