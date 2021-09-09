import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const authHeader = req.headers.authorization;
      console.log(authHeader.split(' '));
      const [bearer, token] = authHeader.split(' ');
      console.log(`bearer=${bearer}, token=${token}`);
      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException('User not authorized!_internal');
      }
      const user = this.jwtService.verify(token);
      console.log(11111);
      req.user = user;
      return true;
    } catch (e) {
      throw new UnauthorizedException('User not authorized!');
    }
  }
}
