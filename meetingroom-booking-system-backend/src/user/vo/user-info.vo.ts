import { ApiProperty } from "@nestjs/swagger";

export class UserDetailVo {
    @ApiProperty()
    id: number;

    @ApiProperty()
    username: string;

    @ApiProperty()
    nickName: string;

    @ApiProperty() a
    email: string;

    @ApiProperty()
    headPic: string;

    @ApiProperty()
    phoneNumber: string;

    @ApiProperty()
    isFrozen: boolean;

    @ApiProperty()
    createTime: Date;
}
