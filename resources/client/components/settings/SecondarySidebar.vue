<template>
  <!-- Secondary sidebar -->
  <nav aria-label="Sections" class="hidden flex-shrink-0 w-96 bg-white border-r border-blue-gray-200 xl:flex xl:flex-col">
    <div class="flex-shrink-0 h-16 px-6 border-b border-blue-gray-200 flex items-center">
      <p class="text-lg font-medium text-blue-gray-900">Settings</p>
    </div>

    <!-- Links -->
    <div class="flex-1 min-h-0 overflow-y-auto">
      <!-- Current: "bg-blue-50 bg-opacity-50", Default: "hover:bg-gray-50 hover:bg-opacity-50" -->
      <a href="#" class="flex p-6 bg-blue-50 bg-opacity-50 border-b border-blue-gray-200" aria-current="page">
        <VIconOutlined name="cog" class="flex-shrink-0 -mt-0.5 text-blue-gray-400"/>
        <div class="ml-3 text-sm">
          <p class="font-medium text-blue-gray-900">Account</p>
          <p class="mt-1 text-blue-gray-500">Ullamcorper id at suspendisse nec id volutpat vestibulum enim. Interdum blandit.</p>
        </div>
      </a>

      <a href="#" class="flex p-6 border-b border-blue-gray-200 hover:bg-blue-50 hover:bg-opacity-50">
        <VIconOutlined name="bell" class="flex-shrink-0 -mt-0.5 text-blue-gray-400"/>

        <div class="ml-3 text-sm">
          <p class="font-medium text-blue-gray-900">Notifications</p>
          <p class="mt-1 text-blue-gray-500">Enim, nullam mi vel et libero urna lectus enim. Et sed in maecenas tellus.</p>
        </div>
      </a>

      <a href="#" class="flex p-6 border-b border-blue-gray-200 hover:bg-blue-50 hover:bg-opacity-50">
        <VIconOutlined name="key" class="flex-shrink-0 -mt-0.5 text-blue-gray-400"/>
        <div class="ml-3 text-sm">
          <p class="font-medium text-blue-gray-900">Security</p>
          <p class="mt-1 text-blue-gray-500">Semper accumsan massa vel volutpat massa. Non turpis ut nulla aliquet turpis.</p>
        </div>
      </a>

      <a href="#" class="flex p-6 border-b border-blue-gray-200 hover:bg-blue-50 hover:bg-opacity-50">
        <VIconOutlined name="photograph" class="flex-shrink-0 -mt-0.5 text-blue-gray-400"/>
        <div class="ml-3 text-sm">
          <p class="font-medium text-blue-gray-900">Appearance</p>
          <p class="mt-1 text-blue-gray-500">Magna nulla id sed ornare ipsum eget. Massa eget porttitor suscipit consequat.</p>
        </div>
      </a>

      <a href="#" class="flex p-6 border-b border-blue-gray-200 hover:bg-blue-50 hover:bg-opacity-50">
        <VIconOutlined name="cash" class="flex-shrink-0 -mt-0.5 text-blue-gray-400"/>
        <div class="ml-3 text-sm">
          <p class="font-medium text-blue-gray-900">Billing</p>
          <p class="mt-1 text-blue-gray-500">Orci aliquam arcu egestas turpis cursus. Lectus faucibus netus dui auctor mauris.</p>
        </div>
      </a>

      <a href="#" class="flex p-6 border-b border-blue-gray-200 hover:bg-blue-50 hover:bg-opacity-50">
        <VIconOutlined name="view-grid-add" class="flex-shrink-0 -mt-0.5 text-blue-gray-400"/>
        <div class="ml-3 text-sm">
          <p class="font-medium text-blue-gray-900">Integrations</p>
          <p class="mt-1 text-blue-gray-500">Nisi, elit volutpat odio urna quis arcu faucibus dui. Mauris adipiscing pellentesque.</p>
        </div>
      </a>

      <a href="#" class="flex p-6 border-b border-blue-gray-200 hover:bg-blue-50 hover:bg-opacity-50">
        <VIconOutlined name="search-circle" class="flex-shrink-0 -mt-0.5 text-blue-gray-400"/>
        <div class="ml-3 text-sm">
          <p class="font-medium text-blue-gray-900">Additional Resources</p>
          <p class="mt-1 text-blue-gray-500">Quis viverra netus donec ut auctor fringilla facilisis. Nunc sit donec cursus sit quis et.</p>
        </div>
      </a>
    </div>
  </nav>
</template>
