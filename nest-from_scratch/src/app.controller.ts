import { Controller, Get } from "@nestjs/common";

@Controller('/api')
export class AppController {
    @Get()
    getRootRoute() {
        return "hello world";
    }

    @Get('/test')
    test() {
        return "hello test";
    }
}