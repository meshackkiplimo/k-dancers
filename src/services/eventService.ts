import Event, { IEvent } from '../models/Event';

export class EventService {
  async createEvent(eventData: Partial<IEvent>): Promise<IEvent> {
    const newEvent = new Event({
      name: eventData.name,
      package: eventData.package,
      price: eventData.price,
      venue: eventData.venue,
    });

    return await newEvent.save();
  }

  async getAllEvents(): Promise<IEvent[]> {
    return await Event.find();
  }
}