<template>
  <div>
    <div class="error">
      <p><strong>Oh snap! Change a few things up and try submitting again.</strong></p>
      <p>error</p>
    </div>
    <div class="notice">
      <p><strong>Heads up!</strong></p>
      <p>notice</p>
    </div>
    <div class="success">
      <p><strong>Well done!</strong></p>
      <p>success</p>
    </div>
  </div>
</template>

<style scoped>
.error,
.notice,
.success {
  padding: 0.8em;
  margin-bottom: 1em;
  border: 2px solid #ddd;
}
.error {
  background: #fbe3e4;
  color: #8a1f11;
  border-color: #fbc2c4;
}
.notice {
  background: #fff6bf;
  color: #514721;
  border-color: #ffd324;
}
.success {
  background: #e6efc2;
  color: #264409;
  border-color: #c6d880;
}
.error a {
  color: #8a1f11;
}
.notice a {
  color: #514721;
}
.success a {
  color: #264409;
}
</style>
