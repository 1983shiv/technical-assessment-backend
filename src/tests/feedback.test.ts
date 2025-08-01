import request from 'supertest';
import app from '../app';

describe('POST /api/feedback', () => {
    it('should accept valid feedback', async () => {
        const res = await request(app)
            .post('/api/feedback')
            .send({
                email: 'test@example.com',
                rating: 5,
                message: 'Great product!',
            });

        expect(res.status).toBe(201);
        expect(res.body.data.email).toBe('test@example.com');
    });

    it('should reject missing email', async () => {
        const res = await request(app)
            .post('/api/feedback')
            .send({ rating: 4 });

        expect(res.status).toBe(400);
    });

    it('should reject invalid email format', async () => {
        const res = await request(app)
            .post('/api/feedback')
            .send({ email: 'not-an-email', rating: 3 });

        expect(res.status).toBe(400);
    });

    it('should reject rating outside range', async () => {
        const res = await request(app)
            .post('/api/feedback')
            .send({ email: 'user@example.com', rating: 7 });

        expect(res.status).toBe(400);
    });

    it('should reject message longer than 500 chars', async () => {
        const res = await request(app)
            .post('/api/feedback')
            .send({
                email: 'test@example.com',
                rating: 4,
                message: 'x'.repeat(501),
            });

        expect(res.status).toBe(400);
    });
});
