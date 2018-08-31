import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@JsonController()
export class UserController {

    @Get("/users")
    getAll() {
        return "dd";
    }

    @Get("/users/:id")
    getOne(@Param("id") id: number) {
        return "ddid"
    }

    @Post("/users")
    post(@Body() user: number) {
        return "dddpost"
    }

}