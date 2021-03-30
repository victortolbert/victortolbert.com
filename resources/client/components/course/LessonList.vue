<template>
  <ol>
    <li id="lesson-570" class="content-item lesson-list-item cursor-pointer py-7 mb-4 is-tooling" style="min-height: 140px">
      <div class="lesson-list-index relative mr-8">
        <div>
          <div class="lesson-list-index-wrap text-gray-400">
            <div class="circle flex items-center text-gray-400" style="width: 50px; height: 50px; margin-top: 10px">
              <button class="cursor-pointer">
                <div class="flex items-center justify-center text-white">
                  <svg viewBox="0 0 36 36" width="100%" class="text-tooling">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke="#D9D9D9" fill="rgb(229, 229, 229)" stroke-width="2" stroke-dasharray="100, 100" />
                  </svg>
                  <div class="absolute">
                    <svg width="18" viewBox="0 0 21 16" class="inline-block relative text-gray-700" style="display: none">
                      <g fill-rule="evenodd" class="fill-current">
                        <path fill="none" d="M-3-5h27v27H-3z" />
                        <path d="M7.439 12.152l-5.037-5.36c-.447-.477-1.119-.477-1.566 0a1.204 1.204 0 0 0 0 1.667l6.603 7.03L20.086 2.025a1.204 1.204 0 0 0 0-1.668c-.447-.476-1.12-.476-1.567 0L7.44 12.152z" />
                      </g>
                    </svg>
                    <div class="text-black md:text-lg">
                      01
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="lesson-list-details flex-1  mobile:border-b-0">
        <div>
          <div class="lg:flex justify-between items-center mb-1 lg:mb-3">
            <h4 class="lesson-list-title link lg:leading-none font-semibold text-xl md:text-lg lg:text-xl flex items-center mr-3">
              <a href="/series/sublime-text-mastery/episodes/1" title="Make Sublime Pretty" class=" text-black hover:text-black">
                Make Sublime Pretty
              </a>
            </h4>
            <div class="flex mt-1 mb-4 lg:mt-0 lg:mb-0 flex-shrink-0">
              <span class="text-blue font-bold text-2xs mr-3">Free Episode</span>
              <span class="text-grey-40 text-xs lg:text-2xs font-semibold inline-flex items-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 13 13" class="text-grey-dark fill-current opacity-50">
                  <path fill-rule="evenodd" d="M6.5 0C2.925 0 0 2.925 0 6.5S2.925 13 6.5 13 13 10.075 13 6.5 10.075 0 6.5 0zm2.967 9L6 6.913V3h1v3.391l3 1.761L9.467 9z" />
                </svg>
                <span class="ml-1 text-grey-dark font-bold text-2xs">Run Time 10:20</span>
              </span>
              <span class="flex items-center"></span>
            </div>
          </div>
        </div>
        <div class="lesson-list-excerpt lg:block generic-content text-black text-sm">
          <p>While the default install of Sublime isn't unattractive, I think we can do way better. </p>
        </div>
      </div>
    </li>
  </ol>
</template>

<style scoped>
a {
  transition: background-color .3s, border .3s;
}

a.link:not(.no-transition) {
  transition: all .3s;
}

.link:hover {
  color: currentColor;
  text-decoration: underline;
}

.content-item {
  transition: background-color, .3s;
}

.content-item:not(.content-item-condensed) {
  border-radius: .9rem;
  border: 1px solid rgba(0,0,0,.03);
  background-color: rgba(0,0,0,.01);
}

.content-item.content-item-condensed {
  border-radius: .5rem;
}

@media(min-width: 992px) {
  .content-item:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(246,246,246,var(--tw-bg-opacity));
  }
}

.lesson-list-item {
  display: flex;
}

.lesson-list-item > * {
  padding: 0 27px;
}

.is-condensed .lesson-list-item > * {
  padding: 0;
}

.lesson-list-index {
  color: #fff;
  font-weight: 700;
  justify-content: center;
  padding-right: 0;
}

@media(min-width: 768px) {
  .lesson-list-index {
    padding-top: auto;
  }
}

.circle {
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.lesson-list-details {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 0;
}

.lesson-list-details li {
  list-style: bullet;
}

.lesson-list-meta {
  text-transform: uppercase;
  margin-bottom: .7em;
  color: #cacaca;
  font-weight: 700;
}

.lesson-list-excerpt {
  word-break: break-word;
}

.lesson-list-excerpt a {
  --tw-text-opacity: 1;
   color: rgba(34,41,47,var(--tw-text-opacity));
}

.lesson-list-excerpt p:last-child {
  margin-bottom: 0;
}
</style>
