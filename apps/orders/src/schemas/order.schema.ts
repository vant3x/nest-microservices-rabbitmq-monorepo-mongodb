import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false })
export class Order extends AbstractDocument {
   
    @Prop()
    name: string;

    @Prop()
    price: number;

    @Prop()
    phoneNumber: string;

    @Prop({
        required: false,
        default: 1
    })
    quantity: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);