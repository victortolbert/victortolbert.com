<template>
  <aside class="hidden xl:block xl:flex-shrink-0 xl:order-first">
    <div class="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100">
      <div class="flex-shrink-0">
        <div class="h-16 bg-white px-6 flex flex-col justify-center">
          <div class="flex items-baseline space-x-3">
            <h2 class="text-lg font-medium text-gray-900">Inbox</h2>
            <p class="text-sm font-medium text-gray-500">10 messages</p>
          </div>
        </div>
        <div
          class="border-t border-b border-gray-200 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-500"
        >Sorted by date</div>
      </div>
      <nav aria-label="Message list" class="min-h-0 flex-1 overflow-y-auto">
        <ul class="border-b border-gray-200 divide-y divide-gray-200">
          <li
            class="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">Gloria Roberston</p>
                  <p class="text-sm text-gray-500 truncate">Velit placeat sit ducimus non sed</p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
              >1d ago</time>
            </div>
            <div class="mt-1">
              <p
                class="line-clamp-2 text-sm text-gray-600"
              >Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.</p>
            </div>
          </li>

          <li
            class="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">Virginia Abshire</p>
                  <p
                    class="text-sm text-gray-500 truncate"
                  >Nemo mollitia repudiandae adipisci explicabo optio consequatur tempora ut nihil</p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
              >1d ago</time>
            </div>
            <div class="mt-1">
              <p
                class="line-clamp-2 text-sm text-gray-600"
              >Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.</p>
            </div>
          </li>

          <li
            class="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">Kyle Gulgowski</p>
                  <p
                    class="text-sm text-gray-500 truncate"
                  >Doloremque reprehenderit et harum quas explicabo nulla architecto dicta voluptatibus</p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
              >1d ago</time>
            </div>
            <div class="mt-1">
              <p
                class="line-clamp-2 text-sm text-gray-600"
              >Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.</p>
            </div>
          </li>

          <li
            class="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">Hattie Haag</p>
                  <p class="text-sm text-gray-500 truncate">Eos sequi et aut ex impedit</p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
              >1d ago</time>
            </div>
            <div class="mt-1">
              <p
                class="line-clamp-2 text-sm text-gray-600"
              >Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.</p>
            </div>
          </li>

          <li
            class="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">Wilma Glover</p>
                  <p class="text-sm text-gray-500 truncate">Quisquam veniam explicabo</p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
              >1d ago</time>
            </div>
            <div class="mt-1">
              <p
                class="line-clamp-2 text-sm text-gray-600"
              >Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.</p>
            </div>
          </li>

          <li
            class="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">Dolores Morissette</p>
                  <p
                    class="text-sm text-gray-500 truncate"
                  >Est ratione molestiae modi maiores consequatur eligendi et excepturi magni</p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
              >1d ago</time>
            </div>
            <div class="mt-1">
              <p
                class="line-clamp-2 text-sm text-gray-600"
              >Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.</p>
            </div>
          </li>

          <li
            class="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">Guadalupe Walsh</p>
                  <p class="text-sm text-gray-500 truncate">Commodi deserunt aut veniam rem ipsam</p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
              >1d ago</time>
            </div>
            <div class="mt-1">
              <p
                class="line-clamp-2 text-sm text-gray-600"
              >Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.</p>
            </div>
          </li>

          <li
            class="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">Jasmine Hansen</p>
                  <p class="text-sm text-gray-500 truncate">Illo illum aut debitis earum</p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
              >1d ago</time>
            </div>
            <div class="mt-1">
              <p
                class="line-clamp-2 text-sm text-gray-600"
              >Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.</p>
            </div>
          </li>

          <li
            class="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">Ian Volkman</p>
                  <p class="text-sm text-gray-500 truncate">Qui dolore iste ut est cumque sed</p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
              >1d ago</time>
            </div>
            <div class="mt-1">
              <p
                class="line-clamp-2 text-sm text-gray-600"
              >Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.</p>
            </div>
          </li>

          <li
            class="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
          >
            <div class="flex justify-between space-x-3">
              <div class="min-w-0 flex-1">
                <a href="#" class="block focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900 truncate">Rafael Klocko</p>
                  <p
                    class="text-sm text-gray-500 truncate"
                  >Aut sed aut illum delectus maiores laboriosam ex</p>
                </a>
              </div>
              <time
                datetime="2021-01-27T16:35"
                class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
              >1d ago</time>
            </div>
            <div class="mt-1">
              <p
                class="line-clamp-2 text-sm text-gray-600"
              >Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.</p>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
