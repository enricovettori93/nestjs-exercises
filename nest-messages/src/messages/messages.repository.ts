import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class MessagesRepository {
    private fileName = "messages.json";

    async findOne(id: string) {
        const contents = await readFile(this.fileName, "utf-8");
        const messages = JSON.parse(contents);
        return messages[id];
    }

    async findAll() {
        const contents = await readFile(this.fileName, "utf-8");
        return JSON.parse(contents);
    }

    async create(content: string) {
        const contents = await readFile(this.fileName, "utf-8");
        const messages = JSON.parse(contents);
        const id = Math.floor(Math.random() * 999);

        messages[id] = { content, id };
        await writeFile(this.fileName, JSON.stringify(messages));
    }
}