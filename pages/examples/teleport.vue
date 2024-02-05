<template>
  <div>
    <div>
      <!-- SSR Teleport -->
      <Teleport to="body">
        SSR Teleport
      </Teleport>

      <!-- Client Teleport -->
      <ClientOnly>
        <Teleport to="body">
          <div>
            Hello from a client-side teleport!
          </div>
        </Teleport>
      </ClientOnly>

      <!-- Modal Example -->
      <MyModal />
    </div>
  </div>
</template>
