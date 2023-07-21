import getModel from './getmodel';
import NodeCache from "../config/node";
import { Request, Response } from 'express';
const timeOut = 300;

export async function GetAll(req: Request, res: Response) {
    const { models } = req.params || req.query;
    let Models = await getModel(models);

    if (!Models) {
        return res.status(404).json({ message: "Invalid request parameters" });
    }
    try {

        const c = NodeCache.get(models)
        if (c) return res.status(200).json(c);

        const result = await Models.find({});
        if (result.length === 0) {
            return res.status(404).json({ message: `${models} is empty!` });
        }

        NodeCache.set(models, JSON.stringify(result), timeOut);

        return res.status(200).json(result);
    } catch (error: any) {
        console.log("Error setting cache:", error);
        return res.status(500).json({ message: error.message });
    }
}


export async function GetID(req: Request, res: Response) {
    const { models, id } = req.params || req.query || req.body;

    try {
        let Model = await getModel(models);
        if (!Model) {
            return res.status(404).json({ message: "Invalid request parameters" });
        }
        const c = NodeCache.get(id);
        if (c) return res.json(JSON.parse(JSON.stringify(c)));
        const result = await Model.findOne({ _id: id });
        if (!result) {
            return res.json({ message: `${models} not found!` });
        }

        NodeCache.set(id, JSON.stringify(result), timeOut);
        return res.status(200).json(result);
    } catch (error: any) {
        return res.status(500).json({
            code: 500,
            message: error.message
        });
    }

}

export async function Create(req: Request, res: Response) {
    const models = req.params.models;
    try {
        const data = req.body;
        delete data.token;
        let Model = await getModel(models);
        if (!Model) {
            return res.status(404).json({ message: "Invalid request parameters" });
        }
        const r = await Model.create(data)
        return res
            .status(200)
            .json({ message: `Create ${models} success.`, data: r });

    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}

export async function CreateMany(req: Request, res: Response) {
    const models = req.params.models;
    const d = req.body;
    delete d.token;
    try {

        let Model = await getModel(models);
        if (!Model) {
            return res.status(404).json({ message: "Invalid request parameters" });
        }
        const result = d.map((obj: any) => {
            const { token, ...r } = obj;
            return r;
        });
        const r = await Model.insertMany(result)
        return res
            .status(200)
            .json({ message: `Create many ${models} successfully.`, data: r });

    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}

export async function Update(req: Request, res: Response) {
    const models = req.params.models;
    const data = req.body;
    delete data.token;

    const id = { _id: data.id };
    const update = Object.assign({}, data);

    const c = NodeCache.get(data.id);

    if (c) return res.json(c);
    let Model = await getModel(models);
    if (!Model) {
        return res.status(404).json({ message: "Invalid request parameters" });
    }
    try {

        const r = await Model.findOneAndUpdate(id, update, { new: true });
        if (!r) {
            const message = { message: `${models} not found for update.` };
            res.status(404).json({ message: message });
        }
        NodeCache.set(data.id, JSON.stringify(r), timeOut);
        return res.status(200).json({
            message: `${models} updated success.`,
            data: r,
        });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}

export async function Remove(req: Request, res: Response) {
    const models = req.params.models;

    let Model = await getModel(models);
    if (!Model) {
        return res.status(404).json({ message: "Invalid request parameters" });
    }

    const { id } = req.body;
    const c = NodeCache.get(id);
    if (c) return res.json(c);

    try {
        const r = await Model.findOneAndDelete({ _id: id }, { new: true });
        if (!r) {
            const message = { message: `${models} not found for delete.` };

            return res.status(200).json(message);
        }
        NodeCache.set(id, JSON.stringify(r), timeOut);
        return res
            .status(200)
            .json({ message: `Delete ${models} success.`, data: r });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}

export async function Clear(req: Request, res: Response) {
    NodeCache.flushAll();
    return res.status(200).json({ message: "Cache cleared" });
}