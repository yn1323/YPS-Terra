import { Injectable } from '@nestjs/common'
import { Recipe } from './models/recipe'

@Injectable()
export class RecipesService {
  async findOneById(id: string): Promise<Recipe> {
    const recipe = new Recipe()
    recipe.id = '1234'
    recipe.name = 'name'

    return recipe
  }
}
