import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Res() res: Response): string {

    res.render('index', { title: 'Generate PDF Back', message: 'Hello World!' });
    return this.appService.getHello();
  }

  @Post()
  postHello(@Res() res: Response, @Body() body: any) {
    const response = res.render('index', { ...body });
    console.log("lista")
    console.log(body);
    return response;
  }
}
