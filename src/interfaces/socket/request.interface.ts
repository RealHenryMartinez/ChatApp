import IMessage from "../message/message.interface";

export default interface IRequest {
    type: string;
    content: IMessage | string;
}