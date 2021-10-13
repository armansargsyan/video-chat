import { UserDto } from 'src/accounts/Dto/user.dto';
import { Account } from './entitys/account.entity';
import { Repository } from 'typeorm';
import { VerificationDto } from './Dto/verification.dto';
import { TwilioClient } from 'nestjs-twilio';
import { AccessTokenDto } from './Dto/accessToken.dto';
import { JwtAuthService } from '../jwt-auth/jwt-auth.service';
import { LoginResultDto } from './Dto/loginResult.dto';
export declare class AccountsService {
    private accountRepository;
    private readonly client;
    private jwtAuthService;
    manager: any;
    constructor(accountRepository: Repository<Account>, client: TwilioClient, jwtAuthService: JwtAuthService);
    verificationCodeGenerator(): number;
    create(userDto: UserDto): Promise<AccessTokenDto>;
    logIn(userDto: UserDto): Promise<LoginResultDto>;
    validToken(access_token: string): Promise<boolean>;
    verification(verificationDto: VerificationDto, access_token: string): Promise<AccessTokenDto>;
    sendSMS(phoneNumber: any, code: any): Promise<import("twilio/lib/rest/api/v2010/account/message").MessageInstance>;
    clear(): Promise<string>;
}
