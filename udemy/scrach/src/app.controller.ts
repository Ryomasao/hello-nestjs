import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get('/asdf')
  getRootRoute() {
    return 'hello nestjs'
  }
}
