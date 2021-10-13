import { AccountsService } from './accounts.service';
import { UserDto } from './Dto/user.dto';
import { VerificationDto } from './Dto/verification.dto';
import { AccessTokenDto } from './Dto/accessToken.dto';
import { LoginResultDto } from './Dto/loginResult.dto';
export declare class AccountsController {
    private readonly accountService;
    constructor(accountService: AccountsService);
    logIn(userDto: UserDto): Promise<LoginResultDto>;
    validToken(access_token: string): Promise<boolean>;
    signUp(userDto: UserDto): Promise<AccessTokenDto>;
    verification(verificationDto: VerificationDto, accessToken: any): Promise<AccessTokenDto>;
    clear(): Promise<string>;
}
