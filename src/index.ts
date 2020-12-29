import 'reflect-metadata';
import 'express-async-errors';
import express, { Request, response, Response } from 'express';
import './database';
import { getRepository } from 'typeorm';
import Register from './entity/register';

const app = express();

app.use(express.json());

app.post('/ping', async (req: Request, res: Response) => {
    console.log(req.body);
    const { id } = req.body;
    console.log(id);

    const repository = getRepository(Register);
    const registerAlreadyExists = await repository.findOne(id);
    if (registerAlreadyExists) {
        registerAlreadyExists.registerTimes += 1;
        await repository.save(registerAlreadyExists);

        return response.json(registerAlreadyExists);
    }
    const newRowRegister = repository.create({ id });
    await repository.save(newRowRegister);

    return response.json(newRowRegister);
});
app.get('/ping', (req: Request, res: Response) => res.send('pong'));
app.listen(3001, () => console.log('>>> LISTENING <<<'));
