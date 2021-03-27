import Model from './Model'
import Organization from './Organization'
import User from './User'

export default class Article extends Model {
  resource() {
    return 'articles'
  }

  relations() {
    return {
      user: User,
      organization: Organization,
    }
  }
}
