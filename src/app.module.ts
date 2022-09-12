import { join } from "path";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { CatsModule } from "./cats/cats.module";


@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()]
    }),
    MongooseModule.forRoot("mongodb://localhost/nest")
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
