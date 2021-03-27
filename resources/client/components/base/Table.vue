<script lang="ts">
import {courseParticipants} from '~/__mocks__'
import {formatRelative} from 'date-fns'

export default {
  name: 'BaseTable',
  data() {
    return {
      data: courseParticipants,
      showProfile: false,
      showCourseInformation: false,
      isEmpty: false,
      isBordered: false,
      isStriped: true,
      isNarrowed: false,
      isHoverable: true,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: false,
      isOpen: 0,
      isImageModalActive: false,
      isCardModalActive: false,
      // selected: data[1],
      checkboxPosition: 'left',
      checkedRows: [],
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'small',
      currentPage: 1,
      perPage: 10,
      stickyHeaders: false,
      total: 200,
      current: 10,
      rangeBefore: 3,
      rangeAfter: 1,
      order: '',
      size: '',
      isSimple: false,
      isRounded: false,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right',
    }
  },
  methods: {
    formatDate(date) {
      return formatRelative(new Date(date), new Date())
    },
  },
}
</script>


<template>
  <section>
    <article class="mt-4">
      <OTable
        table-class="my-table-class"
        :data="isEmpty ? [] : data"
        :bordered="isBordered"
        :striped="isStriped"
        :narrowed="isNarrowed"
        :hoverable="isHoverable"
        :loading="isLoading"
        :focusable="isFocusable"
        :mobile-cards="hasMobileCards"
        :paginated="isPaginated"
        :per-page="perPage"
        :pagination-simple="isPaginationSimple"
        :pagination-position="paginationPosition"
        :current-page.sync="currentPage"
        :default-sort-direction="defaultSortDirection"
        :sort-icon="sortIcon"
        :sort-icon-size="sortIconSize"
        :checked-rows.sync="checkedRows"
        default-sort="user.first_name"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
        ref="table1"
        :detailed="false"
        :checkable="false"
        :checkbox-position="checkboxPosition"
        :header-checkable="false"
        :sticky-header="stickyHeaders"
        :debounce-search="200"
        td-selected-class="text-red-600"
        icon-pack="fas"
        :show-header="true"
      >
        <OTableColumn
          field="name"
          searchable
          sortable
          width="250"
          cell-class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
          header-class="text-xs font-medium uppercase"
          label="Participant"
        >
          <template slot="searchable" slot-scope="props">
            <OInput
              v-model="props.filters[props.column.field]"
              placeholder=""
              icon="search"
              icon-pack="fas"
              expanded
              input-class="block w-full border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </template>
          <template v-slot="props">
            <span class="flex items-center space-x-4">
              <span class="relative inline-block">
                <img
                  class="w-8 h-8 rounded-full"
                  :src="props.row.imageUrl"
                  :alt="props.row.name"
                />
                <span
                  class="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white"
                />
              </span>
              <button
                type="button"
                class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                @click="showProfile = true"
              >
                {{ props.row.name }}
              </button>
            </span>
          </template>
        </OTableColumn>

        <OTableColumn
          field="course"
          searchable
          sortable
          width="450"
          cell-class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
          header-class="text-xs font-medium uppercase"
          label="Course"
        >
          <template slot="searchable" slot-scope="props">
            <OInput
              v-model="props.filters[props.column.field]"
              placeholder=""
              icon="search"
              icon-pack="fas"
              expanded
              input-class="block w-full border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </template>
          <template v-slot="props">
            <button
              type="button"
              class="text-primary-600 hover:text-primary-900"
              @click="showCourseInformation = true"
            >
              {{ props.row.course }}
            </button>
          </template>
        </OTableColumn>

        <OTableColumn
          field="lastActivity"
          label=""
          sortable
          width="150"
          numeric
          centered
          cell-class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
        >
          <template slot="searchable" slot-scope="props">
            <OInput
              v-model="props.filters[props.column.field]"
              placeholder="Search..."
              icon="search"
              icon-pack="fas"
              input-class="block w-full border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </template>
          <template v-slot="props">
            {{ formatDate(props.row.lastActivity) }}
          </template>
        </OTableColumn>

        <OTableColumn width="160" label="" v-slot="props">
          <span>
            <BaseProgressMeter :first-meter="props.row.progress * 100" />
          </span>
        </OTableColumn>

        <!-- <OTableColumn field="id" label="" width="40" v-slot="props">
          <ODropdown aria-role="list">
            <div class="flex" slot="trigger">
              <span class="mr-1">Actions</span>
              <OIcon
                pack="fas"
                icon="caret-down"
                slot="trigger"
                role="button"
              />
            </div>

            <ODropdownItem aria-role="listitem">Action</ODropdownItem>

            <ODropdownItem aria-role="listitem">
              Another action on {{ props.row.id }}
            </ODropdownItem>

            <ODropdownItem aria-role="listitem">
              Something else with: {{ props.row.id }}</ODropdownItem
            >
          </ODropdown>
        </OTableColumn> -->
        <template v-slot:empty>
          <BaseBlankState> There are no matching results </BaseBlankState>
        </template>
      </OTable>

      <!-- OVERLAYS -->

      <!-- CourseInfoModal -->
      <OModal :active.sync="showCourseInformation" :width="640" scroll="clip">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales
          leo nec convallis rutrum. Vivamus pharetra molestie arcu at dictum.
          Nulla faucibus leo eget enim egestas, in tempus justo venenatis. Duis
          dictum suscipit erat, a dapibus eros lobortis ac. Praesent tempor
          rhoncus convallis. Nullam in ipsum convallis, rutrum elit eget, dictum
          ipsum. Nunc sagittis aliquet massa. Etiam lacus sapien, eleifend non
          eros quis, finibus ornare nisl. Ut laoreet sit amet lacus non
          dignissim. Sed convallis mattis enim, sed interdum risus molestie ut.
          Praesent vel ex hendrerit, cursus lectus a, blandit felis. Nam luctus
          orci nec varius commodo.
        </p>
        <p>
          Sed vulputate metus purus, ut egestas erat congue et. Donec tellus
          orci, malesuada eget dolor sed, pellentesque bibendum nunc. In eu
          egestas diam. Integer sed congue massa. Sed a urna quam. Morbi
          vulputate dolor eleifend ligula lobortis venenatis. Aenean
          pellentesque risus sit amet faucibus molestie. Aliquam eu lorem
          aliquet, aliquam nulla in, vestibulum lorem. Donec mollis mi at
          sollicitudin tristique. Nullam id nibh pulvinar, dignissim nisl id,
          gravida risus. Nulla arcu elit, scelerisque in sollicitudin et,
          laoreet et metus. Aenean placerat turpis nec tincidunt tempus.
        </p>
      </OModal>

      <!-- ProfileSidebar -->
      <OSidebar
        fullheight
        right
        position="fixed"
        overlay
        :open.sync="showProfile"
      >
        <section
          class="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl"
        >
          <div class="flex flex-col flex-1 min-h-0 overflow-y-scroll">
            <header class="px-4 mt-4 sm:px-6">
              <div class="flex items-start justify-between">
                <h2
                  id="slide-over-heading"
                  class="text-lg font-medium text-gray-900"
                >
                  Profile
                </h2>
                <div class="flex items-center ml-3 h-7">
                  <button
                    @click="showProfile = false"
                    class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <span class="sr-only">Close panel</span>
                    <Icon is-medium name="x" />
                  </button>
                </div>
              </div>
            </header>

            <article class="relative flex-1 px-4 mt-4 sm:px-6">
              <!-- Replace with your content -->
              <div
                class="h-full border-2 border-gray-200 border-dashed"
                aria-hidden="true"
              />
              <!-- /End replace -->
            </article>
          </div>

          <footer class="flex justify-end flex-shrink-0 px-4 py-4">
            <button
              type="button"
              class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Save
            </button>
          </footer>
        </section>
      </OSidebar>
    </article>
  </section>
</template>
