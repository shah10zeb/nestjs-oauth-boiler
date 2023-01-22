import { Controller, Get, Request, Post, UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('google'))
  @Get()
  async loginGoogle(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req);
  }
}
