import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CatType {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  readonly name: string;
  @Field(() => Int)
  readonly age: number;
  @Field(() => String)
  readonly breed: string;
}