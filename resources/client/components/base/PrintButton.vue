<script lang="ts">
export default {
  data() {
    return {
      printObj: {
        id: 'printMe',
        popTitle: 'good print',
        extraCss: 'https://www.google.com,https://www.google.com',
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
      },
    }
  },
  methods: {
    // window.print(); after content changed
    // https://github.com/vuejs/vue/issues/7094
    printNow(value) {
      this.print = value

      this.$nextTick(() => {
        window.print()
      })
    },
    print() {
      // Get HTML to print from element
      // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
      const prtHtml = document.getElementById('printMe').innerHTML

      // Get all stylesheets HTML
      let stylesHtml = ''
      for (const node of [
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
        ...document.querySelectorAll('link[rel="stylesheet"], style'),
      ]) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML
        stylesHtml += node.outerHTML
      }

      // Open the print window
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/open
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/open#examples
      const WinPrint = window.open(
        '',
        '',
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features
        'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0',
      )

      // https://developer.mozilla.org/en-US/docs/Web/API/Document/write
      WinPrint.document.write(`<!DOCTYPE html>
      <html>
        <head>
          ${stylesHtml}
        </head>
        <body>
          ${prtHtml}
        </body>
      </html>`)

      // https://developer.mozilla.org/en-US/docs/Web/API/Document/close
      WinPrint.document.close()

      // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
      window.setTimeout(() => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/focus
        WinPrint.focus()
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/print
        WinPrint.print()
      }, 200)

      // https://developer.mozilla.org/en-US/docs/Web/API/Window/focus
      // WinPrint.focus()

      // https://developer.mozilla.org/en-US/docs/Web/API/Window/print
      // WinPrint.print()

      // https://developer.mozilla.org/en-US/docs/Web/API/Window/close
      WinPrint.close()

      // Related...
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
      // window.matchMedia('print')
    },
  },
}
</script>
<template>
  <div>
    <section id="printMe" class="my-16">
      <div class="p-6 border-2 rounded shadow border-primary-500">
        <h2>The stuff to print...</h2>
      </div>
    </section>

    <OButton outlined icon-left="print" icon-pack="fad" @click.prevent="print">
      <!-- <BaseIconSolid name="printer" /> -->
      <span>Print this page</span>
    </OButton>

    <OButton outlined v-print="printObj">Print certificate</OButton>
  </div>
</template>
