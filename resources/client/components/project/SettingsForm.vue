<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>
<template>
  <form>
    <div class="space-y-6">
      <div>
        <h1 class="text-lg leading-6 font-medium text-gray-900">Project Settings</h1>
        <p
          class="mt-1 text-sm text-gray-500"
        >Let’s get started by filling in the information below to create your new project.</p>
      </div>

      <div>
        <label for="project_name2" class="block text-sm font-medium text-gray-700">Project Name</label>
        <div class="mt-1">
          <input
            type="text"
            name="project_name2"
            id="project_name2"
            class="block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
            value="Project Nero"
          />
        </div>
      </div>

      <div>
        <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
        <div class="mt-1">
          <textarea
            id="description"
            name="description"
            rows="3"
            class="block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
          ></textarea>
        </div>
      </div>

      <div class="space-y-2">
        <div class="space-y-1">
          <label
            for="add_team_members2"
            class="block text-sm font-medium text-gray-700"
          >Add Team Members</label>
          <p id="add_team_members2_helper" class="sr-only">Search by email address</p>
          <div class="flex">
            <div class="flex-grow">
              <input
                type="text"
                name="add_team_members2"
                id="add_team_members2"
                class="block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
                placeholder="Email address"
                aria-describedby="add_team_members2_helper"
              />
            </div>
            <span class="ml-3">
              <button
                type="button"
                class="bg-white inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <svg
                  class="-ml-2 mr-1 h-5 w-5 text-gray-400"
                  x-description="Heroicon name: solid/plus"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Add</span>
              </button>
            </span>
          </div>
        </div>

        <div class="border-b border-gray-200">
          <ul class="divide-y divide-gray-200">
            <li class="py-4 flex">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&amp;ixqx=iXNbLPGHnb&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt
              />
              <div class="ml-3 flex flex-col">
                <span class="text-sm font-medium text-gray-900">Calvin Hawkins</span>
                <span class="text-sm text-gray-500">calvin.hawkins@example.com</span>
              </div>
            </li>

            <li class="py-4 flex">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixqx=iXNbLPGHnb&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt
              />
              <div class="ml-3 flex flex-col">
                <span class="text-sm font-medium text-gray-900">Bessie Richards</span>
                <span class="text-sm text-gray-500">bessie.richards@example.com</span>
              </div>
            </li>

            <li class="py-4 flex">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixqx=iXNbLPGHnb&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                alt
              />
              <div class="ml-3 flex flex-col">
                <span class="text-sm font-medium text-gray-900">Floyd Black</span>
                <span class="text-sm text-gray-500">floyd.black@example.com</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <fieldset x-data="window.Components.radioGroup({ initialCheckedIndex: 0 })" x-init="init()">
        <legend class="text-sm font-medium text-gray-900">Privacy</legend>

        <div class="mt-1 bg-white rounded-md shadow-sm -space-y-px">
          <label
            x-radio-group-option
            class="rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer bg-primary-50 border-primary-200 z-10"
            x-state:on="Checked"
            x-state:off="Not Checked"
            :class="{ 'bg-primary-50 border-primary-200 z-10': value === 'Public access', 'border-gray-200': !(value === 'Public access') }"
          >
            <input
              type="radio"
              x-model="value"
              name="privacy_setting"
              value="Public access"
              class="h-4 w-4 mt-0.5 cursor-pointer text-primary-600 border-gray-300 focus:ring-primary-500"
              aria-labelledby="privacy-setting-0-label"
              aria-describedby="privacy-setting-0-description"
            />
            <div class="ml-3 flex flex-col">
              <span
                id="privacy-setting-0-label"
                class="block text-sm font-medium text-primary-900"
                x-state:on="Checked"
                x-state:off="Not Checked"
                :class="{ 'text-primary-900': value === 'Public access', 'text-gray-900': !(value === 'Public access') }"
              >Public access</span>
              <span
                id="privacy-setting-0-description"
                class="block text-sm text-primary-700"
                x-state:on="Checked"
                x-state:off="Not Checked"
                :class="{ 'text-primary-700': value === 'Public access', 'text-gray-500': !(value === 'Public access') }"
              >This project would be available to anyone who has the link</span>
            </div>
          </label>

          <label
            x-radio-group-option
            class="border-gray-200 relative border p-4 flex cursor-pointer"
            x-state:on="Checked"
            x-state:off="Not Checked"
            :class="{ 'bg-primary-50 border-primary-200 z-10': value === 'Private to Project Members', 'border-gray-200': !(value === 'Private to Project Members') }"
          >
            <input
              type="radio"
              x-model="value"
              name="privacy_setting"
              value="Private to Project Members"
              class="h-4 w-4 mt-0.5 cursor-pointer text-primary-600 border-gray-300 focus:ring-primary-500"
              aria-labelledby="privacy-setting-1-label"
              aria-describedby="privacy-setting-1-description"
            />
            <div class="ml-3 flex flex-col">
              <span
                id="privacy-setting-1-label"
                class="text-gray-900 block text-sm font-medium"
                x-state:on="Checked"
                x-state:off="Not Checked"
                :class="{ 'text-primary-900': value === 'Private to Project Members', 'text-gray-900': !(value === 'Private to Project Members') }"
              >Private to Project Members</span>
              <span
                id="privacy-setting-1-description"
                class="text-gray-500 block text-sm"
                x-state:on="Checked"
                x-state:off="Not Checked"
                :class="{ 'text-primary-700': value === 'Private to Project Members', 'text-gray-500': !(value === 'Private to Project Members') }"
              >Only members of this project would be able to access</span>
            </div>
          </label>

          <label
            x-radio-group-option
            class="border-gray-200 rounded-bl-md rounded-br-md relative border p-4 flex cursor-pointer"
            x-state:on="Checked"
            x-state:off="Not Checked"
            :class="{ 'bg-primary-50 border-primary-200 z-10': value === 'Private to you', 'border-gray-200': !(value === 'Private to you') }"
          >
            <input
              type="radio"
              x-model="value"
              name="privacy_setting"
              value="Private to you"
              class="h-4 w-4 mt-0.5 cursor-pointer text-primary-600 border-gray-300 focus:ring-primary-500"
              aria-labelledby="privacy-setting-2-label"
              aria-describedby="privacy-setting-2-description"
            />
            <div class="ml-3 flex flex-col">
              <span
                id="privacy-setting-2-label"
                class="text-gray-900 block text-sm font-medium"
                x-state:on="Checked"
                x-state:off="Not Checked"
                :class="{ 'text-primary-900': value === 'Private to you', 'text-gray-900': !(value === 'Private to you') }"
              >Private to you</span>
              <span
                id="privacy-setting-2-description"
                class="text-gray-500 block text-sm"
                x-state:on="Checked"
                x-state:off="Not Checked"
                :class="{ 'text-primary-700': value === 'Private to you', 'text-gray-500': !(value === 'Private to you') }"
              >You are the only one able to access this project</span>
            </div>
          </label>
        </div>
      </fieldset>

      <div>
        <label for="tags" class="block text-sm font-medium text-gray-700">Tags</label>
        <input
          type="text"
          name="tags"
          id="tags"
          class="mt-1 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div class="flex justify-end">
        <button
          type="button"
          class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >Cancel</button>
        <button
          type="submit"
          class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >Create this project</button>
      </div>
    </div>
  </form>
</template>
