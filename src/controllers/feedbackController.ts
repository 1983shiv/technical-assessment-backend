import { Request, Response } from 'express';
import { isValidEmail, isValidRating, isValidMessage } from '../utils/validators';
import validator from 'validator';

export function submitFeedback(req: Request, res: Response) {
    const { email, rating, message } = req.body;

    // const safeEmail = email && validator.normalizeEmail(email);
    const safeEmail = validator.normalizeEmail(email || '') || '';


    // ✅ TODO: validate input
    // 1. Check email format
    if (safeEmail && !isValidEmail(safeEmail)) {
        return res.status(400).json({
            message: 'Please provide a valid email',
            data: { },
        });
    };
    // 2. Check rating is number between 1-5
    if (!isValidRating(rating)) {
        return res.status(400).json({
            message: 'Rating must be between 1 to 5',
            data: { },
        });
    };
    // 3. Message can be optional but if present, must be < 500 characters
    if (!isValidMessage(message)) {
        return res.status(400).json({
            message: 'Message must be less than 500 characters',
            data: { },
        });
    };

    // TBD

    return res.status(201).json({
        message: 'Feedback submitted successfully',
        data: { email:safeEmail, rating, message },
    });
}
