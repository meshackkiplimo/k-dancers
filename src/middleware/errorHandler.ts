import { Request, Response, NextFunction } from 'express';
import multer from 'multer';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);

  if (err instanceof multer.MulterError) {
    res.status(400).json({ message: 'File upload error', error: err.message });
    return
  }

  if (err.message === 'Only images (jpeg, jpg, png) are allowed') {
    res.status(400).json({ message: err.message });
    return 
  }

  res.status(500).json({ message: 'Something went wrong', error: err.message });
}