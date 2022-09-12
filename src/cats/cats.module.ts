import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CatsResolver } from "./cats.resolver";
import { Cat, CatSchema } from "./schemas/cat.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [CatsResolver]
})

export class CatsModule {
}
