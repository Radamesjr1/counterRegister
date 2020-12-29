import 'reflect-metadata';
import 'express-async-errors';
import express, { Request, response, Response } from 'express';
import './database';
import { getRepository } from 'typeorm';
import Register from './entity/Register';

const app = express();

app.use(express.json());

app.post('/ping/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    const repository = getRepository(Register);
    const registerAlreadyExists = await repository.findOne({
        entityId: Number(id),
    });
    if (registerAlreadyExists) {
        registerAlreadyExists.registerTimes += 1;
        await repository.save(registerAlreadyExists);

        return res.json(registerAlreadyExists);
    }
    const newRowRegister = repository.create({ entityId: Number(id) });
    await repository.save(newRowRegister);

    return res.json(newRowRegister);
});
app.get('/ping', (req: Request, res: Response) => res.send('pong'));
app.listen(3001, () => console.log('>>> LISTENING <<<'));
