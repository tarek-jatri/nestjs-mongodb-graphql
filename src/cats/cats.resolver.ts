import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CatsService } from "./cats.service";
import { CatType } from "./dto/cat.type";
import { CatsInput } from "./inputs/cats.input";

@Resolver()
export class CatsResolver {
  constructor(
    private catsService: CatsService
  ) {
  }

  @Query(() => String)
  async hello() {
    return "hello world";
  }

  @Query(() => [CatType])
  async cats() {
    return this.catsService.findAll();
  }

  @Mutation(() => CatType)
  async createCat(@Args("input") input: CatsInput) {
    return this.catsService.create(input);
  }
}