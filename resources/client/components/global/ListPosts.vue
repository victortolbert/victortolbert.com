<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { formatDate } from '~/logics'

const lang = ref('en')
const router = useRouter()
const routes = router.getRoutes()
    .filter(i => i.path.startsWith('/posts') && i.meta.frontmatter.date)
    .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))
const posts = computed(() =>
    routes.filter(i => !i.path.endsWith('.html') && i.meta.frontmatter.lang === lang.value),
)
</script>

    <template>
    <div class="lang">
        <span
            class="mr-2 opacity-50 cursor-default text-normal"
            :class="{ 'opacity-100': lang === 'en' }"
            @click="lang = 'en'"
        >EN</span>
        <span
            class="mr-2 opacity-50 cursor-default text-normal"
            :class="{ 'opacity-100': lang === 'zh' }"
            @click="lang = 'zh'"
        >ZH</span>
    </div>

    <ul>
        <router-link
            v-for="route in posts"
            :key="route.path"
            class="block mt-2 mb-6 font-normal no-underline item"
            :to="route.path"
        >
            <li class="no-underline">
                <div class="text-lg title">{{ route.meta.frontmatter.title }}</div>
                <div class="-mt-1 text-sm opacity-50 time">
                    {{ formatDate(route.meta.frontmatter.date) }}
                    <span
                        v-if="route.meta.frontmatter.duration"
                    >· {{ route.meta.frontmatter.duration }}</span>
                </div>
            </li>
        </router-link>
    </ul>
</template>
