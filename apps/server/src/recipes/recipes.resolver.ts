import { Resolver, Args, Query } from '@nestjs/graphql'
import { Recipe } from './models/recipe'
import { RecipesService } from './recipes.service'

@Resolver(of => Recipe)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}
  @Query(returns => Recipe)
  async recipe(@Args('id') id: string): Promise<Recipe> {
    return await this.recipesService.findOneById(id)
  }
}
