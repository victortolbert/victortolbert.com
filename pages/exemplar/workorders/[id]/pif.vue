<script setup lang="ts">
const { state } = usePropertyInspectionForm()

definePageMeta({
  title: 'Property Inspection',
  breadcrumb: 'Property Inspection',
  layout: 'hancock',
})
</script>

<template>
  <article class="mt-8">
    <div class="bg-primary-300 dark:bg-primary-800 flex flex-col justify-between p-4 text-xl font-bold sm:flex-row sm:items-center">
      <h2>Form Name: Test Form</h2>
      <span>Assets Uploaded: 4 / Max: 100</span>
    </div>
    <div class="grid mt-4 gap-2">
      <!-- Loss Location -->
      <div class="flex flex-col items-start justify-between border rounded bg-white p-4 sm:flex-row dark:border-gray-700 dark:bg-gray-900">
        <label for="loss-location">Loss Location</label>
        <div class="w-full text-right sm:w-1/3">
          <div class="flex items-start gap-4">
            <div class="flex-1">
              <UFormGroup>
                <UTextarea v-model="state.lossLocation" />
              </UFormGroup>
            </div>
            <UButton icon="i-carbon-camera" variant="soft" />
          </div>
        </div>
      </div>
      <!-- Directionality North -->
      <div class="flex flex-col justify-between border rounded bg-white p-4 sm:flex-row sm:items-center dark:border-gray-700 dark:bg-gray-900">
        <label>Directionality North</label>
        <div class="flex items-center gap-4">
          <URadio
            v-for="directionality of state.directionalityNorthOptions"
            :key="directionality.name"
            v-model="state.directionalityNorth"
            v-bind="directionality"
          />
        </div>
      </div>
      <!-- Outside Temperature -->
      <div class="flex flex-col justify-between border rounded bg-white p-4 sm:flex-row sm:items-center dark:border-gray-700 dark:bg-gray-900">
        <label>Outside Temperature (F)</label>
        <div class="flex items-center gap-4">
          <span>99</span>
          <UButton icon="i-carbon-calculator" variant="soft" />
        </div>
      </div>
      <!-- Front Risk Photo Taken -->
      <div class="flex flex-col justify-between border rounded bg-white p-4 sm:flex-row sm:items-center dark:border-gray-700 dark:bg-gray-900">
        <label>Front Risk Photo Taken?</label>
        <div class="flex items-center gap-4">
          <UToggle v-model="state.frontRiskPhotoTaken" />
          <UButton icon="i-carbon-camera" variant="soft" :disabled="!state.frontRiskPhotoTaken" />
        </div>
      </div>
      <!-- Allstate Inspection? -->
      <div class="grid gap-4 border rounded bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
        <div class="flex flex-col justify-between sm:flex-row sm:items-center">
          <label>Allstate Inspection?</label>
          <UToggle v-model="state.allstateInspection" />
        </div>
        <div v-if="state.allstateInspection" class="grid gap-4 sm:pl-4">
          <div class="flex flex-col justify-between sm:flex-row sm:items-center">
            <label>Was the virtual collaboration successful?</label>
            <UToggle v-model="state.virtualCollaborationSuccessful" />
          </div>
          <div class="flex flex-col justify-between sm:flex-row sm:items-center">
            <label>Have All Photos Been Taken?</label>
            <UToggle v-model="state.allPhotosTaken" />
          </div>
          <div class="flex flex-col justify-between sm:flex-row sm:items-center">
            <label>Was a copy of Eagleview Provided?</label>
            <UToggle v-model="state.eagleviewProvided" />
          </div>
          <div class="flex flex-col justify-between sm:flex-row sm:items-center">
            <label>Was Ladder Assist introduced & Role Explained?</label>
            <UToggle v-model="state.ladderAssistIntroduced" />
          </div>
        </div>
      </div>
      <!-- Outside Adjuster Present -->
      <div class="grid gap-4 border rounded bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
        <div class="flex flex-col justify-between sm:flex-row sm:items-center">
          <label>
            Outside Adjuster Present During Inspection?
          </label>
          <UToggle v-model="state.outsideAdjusterPresent" />
        </div>
        <div v-if="state.outsideAdjusterPresent" class="flex flex-col justify-between sm:flex-row sm:items-center">
          <label>
            Outside Adjuster On Roof During Inspection?
          </label>
          <UToggle v-model="state.outsideAdjusterOnRoof" />
        </div>
      </div>
      <!-- Public Adjuster Present -->
      <div class="grid gap-4 border rounded bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
        <div class="flex flex-col justify-between sm:flex-row sm:items-center">
          <label>Public Adjuster Present During Inspection?</label>
          <div class="flex items-center gap-4">
            <UToggle v-model="state.publicAdjusterPresent" />
            <UButton icon="i-carbon-camera" variant="soft" :disabled="!state.publicAdjusterPresent" />
          </div>
        </div>
        <div v-if="state.publicAdjusterPresent" class="flex flex-col justify-between sm:flex-row sm:items-center">
          <label>Public Adjuster On Roof During Inspection?</label>
          <UToggle v-model="state.publicAdjusterOnRoof" />
        </div>
      </div>
      <!-- Insured Present? -->
      <div class="flex flex-col justify-between border rounded bg-white p-4 sm:flex-row sm:items-center dark:border-gray-700 dark:bg-gray-900">
        <label>Insured Present?</label>
        <UToggle v-model="state.insuredPresent" />
      </div>
      <!-- Contractor Present? -->
      <div class="grid gap-4 border rounded bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
        <div class="flex flex-col justify-between sm:flex-row sm:items-center">
          <label>Contractor Present During Inspection?</label>
          <div class="flex items-center gap-4">
            <UToggle v-model="state.contractorPresent" />
            <UButton icon="i-carbon-camera" variant="soft" :disabled="!state.contractorPresent" />
          </div>
        </div>
        <div v-if="state.contractorPresent" class="flex flex-col justify-between sm:flex-row sm:items-center">
          <label>Contractor On Roof During Inspection?</label>
          <UToggle v-model="state.contractorOnRoof" />
        </div>
      </div>
      <!-- Rope & Harness Used? -->
      <div class="flex flex-col justify-between border rounded bg-white p-4 sm:flex-row sm:items-center dark:border-gray-700 dark:bg-gray-900">
        <label class="flex items-center gap-2">
          <span>Rope & Harness Used?</span>
          <span v-if="state.ropeAndHarnessUsed" class="text-red-500">
            Photo Required
          </span>
        </label>
        <div class="flex items-center gap-4">
          <UToggle v-model="state.ropeAndHarnessUsed" />
          <UButton icon="i-carbon-camera" variant="soft" :disabled="!state.ropeAndHarnessUsed" />
        </div>
      </div>
      <!-- Tarp Install -->
      <div class="grid gap-4 border rounded bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
        <div class="flex flex-col justify-between sm:flex-row sm:items-center">
          <label>
            <span>Tarp Install?</span>
            <span v-if="state.tarpInstall" class="text-red-500">
              8 Photos Required
            </span>
          </label>
          <div class="flex items-center gap-4">
            <UToggle v-model="state.tarpInstall" />
            <UButton icon="i-carbon-camera" variant="soft" :disabled="!state.tarpInstall" />
          </div>
        </div>
        <div v-if="state.tarpInstall" class="grid gap-4">
          <div class="flex flex-col justify-between sm:flex-row sm:items-center">
            <label>
              Tarp Install Size (SF)
            </label>
            <UButton icon="i-carbon-calculator" variant="soft" />
          </div>
          <div class="flex flex-col justify-between sm:flex-row sm:items-center">
            <label>
              Tarp Install / Remove & Reset (SF)
            </label>
            <UButton icon="i-carbon-calculator" variant="soft" />
          </div>
        </div>
      </div>
      <!-- Interior Inspected? -->
      <div class="flex flex-col justify-between border rounded bg-white p-4 sm:flex-row sm:items-center dark:border-gray-700 dark:bg-gray-900">
        <label for="interior-inspected">
          Was the Interior Inspected?
        </label>
        <UToggle id="interior-inspected" v-model="state.interiorInspected" />
      </div>
      <!-- Elevation Inspected? -->
      <div class="flex flex-col justify-between border rounded bg-white p-4 sm:flex-row sm:items-center dark:border-gray-700 dark:bg-gray-900">
        <label for="elevation-inspected">
          Was the Elevation Inspected?
        </label>
        <UToggle id="elevation-inspected" v-model="state.elevationInspected" />
      </div>
      <!-- Roof Inspected? -->
      <div class="flex flex-col justify-between border rounded bg-white p-4 sm:flex-row sm:items-center dark:border-gray-700 dark:bg-gray-900">
        <label for="roof-inspected">
          Was the Roof Inspected?
        </label>
        <UToggle id="roof-inspected" v-model="state.roofInspected" />
      </div>
      <!-- Sections -->
      <div class="sections grid mt-8 gap-4">
        <!-- Interior Inspection -->
        <section v-if="state.interiorInspected" id="section-interior">
          <h2 class="bg-gray-300 p-4 text-lg font-bold dark:bg-gray-800">
            Interior Inspection
          </h2>
          <!-- Interior  -->
          <div class="grid gap-1">
            <!-- Bedroom #2 -->
            <div class="grid gap-4 border rounded bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
              <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                <label class="font-medium">
                  Bedroom #2
                </label>
                <div class="flex items-center gap-4">
                  <UToggle v-model="state.interior.bedroom2.damaged" />
                  <UButton icon="i-carbon-camera" variant="soft" />
                </div>
              </div>
              <div v-if="state.interior.bedroom2.damaged" class="grid gap-4 sm:pl-4">
                <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                  <label for="" class="underline">Ceiling Damaged?</label>
                  <UToggle v-model="state.interior.bedroom2.ceiling.damaged" />
                </div>
                <!--  -->
                <div v-if="state.interior.bedroom2.ceiling.damaged" class="grid gap-4 sm:pl-4">
                  <!--  -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Total Ceiling Area (SQFT)</label>
                    <div class="flex items-center gap-4">
                      <span>99</span>
                      <UButton icon="i-carbon-calculator" variant="soft" />
                    </div>
                  </div>
                  <!--  -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Ceiling Area Damaged (SQFT)</label>
                    <div class="flex items-center gap-4">
                      <span>99</span>
                      <UButton icon="i-carbon-calculator" variant="soft" />
                    </div>
                  </div>
                  <!-- Ceiling Drywall Integrity -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Ceiling Drywall Integrity</label>
                    <div class="flex items-center gap-4">
                      <URadio
                        v-for="dryWallIntegrityOption of state.interior.bedroom2.ceiling.dryWallIntegrityOptions"
                        :key="dryWallIntegrityOption.name"
                        v-model="state.interior.bedroom2.ceiling.dryWallIntegrity"
                        v-bind="dryWallIntegrityOption"
                      />
                    </div>
                  </div>
                  <!-- Ceiling Texture -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Ceiling Texture</label>
                    <div class="flex items-center gap-4">
                      <URadio
                        v-for="textureOption of state.interior.bedroom2.ceiling.textureOptions"
                        :key="textureOption.name"
                        v-model="state.interior.bedroom2.ceiling.texture"
                        v-bind="textureOption"
                      />
                    </div>
                  </div>
                  <!--  -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Is Crown Molding Present?</label>
                    <UToggle v-model="state.interior.bedroom2.ceiling.crownMoldingPresent" />
                  </div>
                  <!--  -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Ceiling Lights (QTY)</label>
                    <div class="flex items-center gap-4">
                      <span>99</span>
                      <UButton icon="i-carbon-calculator" variant="soft" />
                    </div>
                  </div>
                  <!--  -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Ceiling Fans (QTY)</label>
                    <div class="flex items-center gap-4">
                      <span>99</span>
                      <UButton icon="i-carbon-calculator" variant="soft" />
                    </div>
                  </div>
                  <!--  -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Ceiling Register Vents (QTY)</label>
                    <div class="flex items-center gap-4">
                      <span>99</span>
                      <UButton icon="i-carbon-calculator" variant="soft" />
                    </div>
                  </div>
                </div>
                <!--  -->
                <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                  <label for="" class="underline">Walls Damaged</label>
                  <UToggle v-model="state.interior.bedroom2.walls.damaged" />
                </div>
                <!--  -->
                <div v-if="state.interior.bedroom2.walls.damaged" class="grid gap-4 sm:pl-4">
                  <!--  -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Total Area of All Walls (SQFT)</label>
                    <div class="flex items-center gap-4">
                      <span>99</span>
                      <UButton icon="i-carbon-calculator" variant="soft" />
                    </div>
                  </div>
                  <!--  -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Wall Texture</label>
                  </div>
                  <!--  -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Baseboards Present?</label>
                    <UToggle v-model="state.interior.bedroom2.walls.baseboardsPresent" />
                  </div>
                  <!--  -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Total Wall 1 Area (SQFT)</label>
                    <div class="flex items-center gap-4">
                      <span>99</span>
                      <UButton icon="i-carbon-calculator" variant="soft" />
                    </div>
                  </div>
                  <!--  -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Wall 1 Area Damaged (SQFT)</label>
                    <div class="flex items-center gap-4">
                      <span>99</span>
                      <UButton icon="i-carbon-calculator" variant="soft" />
                    </div>
                  </div>
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Wall 1 Drywall Integrity</label>
                  </div>
                  <!--  -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Wall 2 Damaged?</label>
                    <UToggle v-model="state.interior.bedroom2.walls.wall2.damaged" />
                  </div>
                  <!--  -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Total Wall 2 Area (SQFT)</label>
                    <div class="flex items-center gap-4">
                      <span>99</span>
                      <UButton icon="i-carbon-calculator" variant="soft" />
                    </div>
                  </div>
                  <!--  -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Wall 2 Area Damaged (SQFT)</label>
                    <div class="flex items-center gap-4">
                      <span>99</span>
                      <UButton icon="i-carbon-calculator" variant="soft" />
                    </div>
                  </div>
                  <!--  -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Wall 2 Drywall Integrity</label>
                  </div>
                </div>
                <!--  -->
                <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                  <label for="" class="underline">Floor Damaged?</label>
                  <UToggle v-model="state.interior.bedroom2.floors.damaged" />
                </div>
                <!--  -->
                <div v-if="state.interior.bedroom2.floors.damaged" class="grid gap-4 sm:pl-4">
                  <!--  -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Floor Area Damaged (SQFT)</label>
                    <div class="flex items-center gap-4">
                      <span>99</span>
                      <UButton icon="i-carbon-calculator" variant="soft" />
                    </div>
                  </div>
                  <!--  -->
                  <div class="flex flex-col justify-between sm:flex-row sm:items-center">
                    <label for="">Material</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Elevation Inspection -->
        <section v-if="state.elevationInspected" id="section-elevation">
          <h2 class="bg-gray-300 p-4 text-lg font-bold dark:bg-gray-800">
            Elevation Inspection
          </h2>
        </section>

        <!-- Roof Inspection -->
        <section v-if="state.roofInspected" id="section-roof">
          <h2 class="bg-gray-300 p-4 text-lg font-bold dark:bg-gray-800">
            Roof Inspection
          </h2>
        </section>
      </div>
    </div>
  </article>
</template>
