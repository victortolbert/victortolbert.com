import { addDays } from 'date-fns'
import { createLogger, createStore } from 'vuex'

import * as event from '~/store/modules/event'
import * as notification from '~/store/modules/notification'
import * as plant from '~/store/modules/plant'
import * as product from '~/store/modules/product'
import * as project from '~/store/modules/project'
import * as todo from '~/store/modules/todo'
import * as ui from '~/store/modules/ui'

const debug = import.meta.env.NODE_ENV !== 'production'

export default createStore({
  strict: debug,
  plugins: debug ? [createLogger(), localStoragePlugin] : [],
  modules: {
    event,
    notification,
    plant,
    product,
    project,
    todo,
    ui,
  },
  state() {
    return {
      activeApp: 'sellers',
      hasError: false,
      marketCpp: 200,
      orderManagementRoute: false,
      reportingRoute: false,
      user: {
        name: 'Seller User',
        email: 'seller@videa.tv',
      },
      settings: {
        stationAudienceShare: 0.3,
      },
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community',
      ],
      events: [
        // {
        //   id: 10,
        //   title: 'Gratitude, Wisdom, Care, Courage, Grit, Celebration',
        //   date: new Date(),
        //   allDay: true,
        // },
        {
          id: 20,
          title: 'Backlog Grooming/Story Time',
          start: addDays(new Date(), 1),
        },
        { id: 30, title: 'Sprint Planning', start: addDays(new Date(), 2) },
        { id: 40, title: 'Release day', date: '2021-01-30' },
        // {id: 50, title: 'The Future of Frontend', date: '2021-02-05'},
      ],
      recipes: [
        {
          title: 'Red White and Blue Rice Krispie Treats',
          author: 'Hank Douglas',
          time: 20,
          difficulty: 'medium',
          servings: 4,
          procedure: 'My recipe for Red White and Blue Rice Krispie Treats lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: 'https://www.iheartnaptime.net/wp-content/uploads/2018/05/red-white-and-blue-rice-krispie-treats.jpg',
          isFeatured: true,
        },
        {
          title: 'Garlic and Herb Sautéed Bell Pepper Strips',
          author: 'Nicholas Denver',
          time: 30,
          difficulty: 'easy',
          servings: 5,
          procedure: 'Garlic and Herb Sautéed Bell Pepper Strips, at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
          image: 'https://www.thespruceeats.com/thmb/eFyjZT5rxTDF3j3GD2undTytLjk=/3000x3000/smart/filters:no_upscale()/garlic-herb-sauteed-bell-pepper-recipe-102112-hero-01-5be21874c9e77c0051eed106.jpg',
          isFeatured: true,
        },
        {
          title: 'Lily’s Healthy Beef Burger',
          author: 'Lily Ford',
          time: 10,
          difficulty: 'easy',
          servings: 4,
          procedure: 'Lily’s Healthy Beef Burger recipe, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/81cMw0qNjTL._SX425_.jpg',
        },
      ],
      weekendsVisible: false,
      //
      activeTab: 0,
      lang: {
        event_info: {
          event_date: 'Event Date',
        },
      },
      s3Bucket: 'https://s3.amazonaws.com/recipe-book-images/',
      program: {
        microsite: {
          school_image_name: '',
        },
      },
    }
  },

  getters: {
    events: state => state.events,
    weekendsVisible: state => state.weekendsVisible,
  },

  mutations: {
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe)
    },
    SET_WEEKENDS_ENABLED(state, enabled) {
      state.weekendsVisible = enabled
    },
  },

  actions: {
    setweekendsVisible({ commit }, enabled) {
      commit('SET_WEEKENDS_ENABLED', enabled)
    },
  },
})

function localStoragePlugin(store) {
  // called when the store is initialized
  store.subscribe((mutation, { todos }) => {
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  })
}
