<template>
  <section
    class="mt-8 bg-white rounded-lg shadow-lg dark:bg-primary-700 dark:text-primary-200"
  >
    <header class="p-6">
      <h2 class="flex items-center space-x-2">
        <!-- <i class="text-gray-400 fad fa-fire fa-lg" /> -->
        <UIcon name="i-ph-fire-duotone" />
        <span>Recent Activity</span>
      </h2>
    </header>

    <div class="px-8 mt-4">
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li class="mb-10 ml-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 rounded-full bg-primary-200 -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
          >
            <svg
              class="w-3 h-3 text-primary-600 dark:text-primary-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <h3
            class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
          >
            Exemplar Application UI v2.0.0
            <span
              class="bg-primary-100 text-primary-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 ml-3"
            >Latest</span>
          </h3>
          <time
            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >Released on January 13th, 2022</time>
          <p
            class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
          >
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <svg
              class="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                clip-rule="evenodd"
              />
            </svg> Download ZIP
          </a>
        </li>
        <li class="mb-10 ml-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 rounded-full bg-primary-200 -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
          >
            <svg
              class="w-3 h-3 text-primary-600 dark:text-primary-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <h3
            class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
          >
            Exemplar Figma v1.3.0
          </h3>
          <time
            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >Released on December 7th, 2021</time>
          <p
            class="text-base font-normal text-gray-500 dark:text-gray-400"
          >
            All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
          </p>
        </li>
        <li class="mb-10 ml-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 rounded-full bg-primary-200 -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
          >
            <svg
              class="w-3 h-3 text-primary-600 dark:text-primary-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <h3
            class="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
          >
            Exemplar Library v1.2.2
          </h3>
          <time
            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >Released on December 2nd, 2021</time>
          <p
            class="text-base font-normal text-gray-500 dark:text-gray-400"
          >
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </p>
        </li>
      </ol>

      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li class="mb-10 ml-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
          />
          <time
            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >February 2022</time>
          <h3
            class="text-lg font-semibold text-gray-900 dark:text-white"
          >
            Application UI code in Tailwind CSS
          </h3>
          <p
            class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
          >
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Learn more
            <svg
              class="w-3 h-3 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
        <li class="mb-10 ml-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
          />
          <time
            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >March 2022</time>
          <h3
            class="text-lg font-semibold text-gray-900 dark:text-white"
          >
            Marketing UI design in Figma
          </h3>
          <p
            class="text-base font-normal text-gray-500 dark:text-gray-400"
          >
            All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
          </p>
        </li>
        <li class="ml-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
          />
          <time
            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >April 2022</time>
          <h3
            class="text-lg font-semibold text-gray-900 dark:text-white"
          >
            E-Commerce UI code in Tailwind CSS
          </h3>
          <p
            class="text-base font-normal text-gray-500 dark:text-gray-400"
          >
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>
