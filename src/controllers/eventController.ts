import { Request, Response, NextFunction } from 'express';
import { EventService } from '../services/eventService';

const eventService = new EventService();

export const createEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, package: pkg, price, venue } = req.body;
    const image = req.file;

    const eventData = {
      name,
      package: pkg as 'gold' | 'silver' | 'bronze',
      price: parseFloat(price),
      image,
      venue,
    };

    const event = await eventService.createEvent(eventData);
    res.status(201).json({ message: 'Event created successfully', event });
  } catch (error) {
    next(error); // Pass to error handler
  }
};

export const getAllEvents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const events = await eventService.getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    next(error);
  }
};