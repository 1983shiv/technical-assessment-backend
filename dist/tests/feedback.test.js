var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import request from 'supertest';
import app from '../app';
describe('POST /api/feedback', () => {
    it('should accept valid feedback', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app)
            .post('/api/feedback')
            .send({
            email: 'test@example.com',
            rating: 5,
            message: 'Great product!',
        });
        expect(res.status).toBe(201);
        expect(res.body.data.email).toBe('test@example.com');
    }));
    it('should reject missing email', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app)
            .post('/api/feedback')
            .send({ rating: 4 });
        expect(res.status).toBe(400);
    }));
    it('should reject invalid email format', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app)
            .post('/api/feedback')
            .send({ email: 'not-an-email', rating: 3 });
        expect(res.status).toBe(400);
    }));
    it('should reject rating outside range', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app)
            .post('/api/feedback')
            .send({ email: 'user@example.com', rating: 7 });
        expect(res.status).toBe(400);
    }));
    it('should reject message longer than 500 chars', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app)
            .post('/api/feedback')
            .send({
            email: 'test@example.com',
            rating: 4,
            message: 'x'.repeat(501),
        });
        expect(res.status).toBe(400);
    }));
});
