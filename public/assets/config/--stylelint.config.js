module.exports = {
  extends: [
    // 'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-8-point-grid'
  ],
  rule: {
    'plugin/8-point-grid': {
      base: 4,
      allowlist: ['2px', '1px', '0.0625rem'],
      ignorelist: ['width', 'height']
    },
    "number-leading-zero": "always",
    "selector-no-qualifying-type": [
      true,
      {
        "ignore": ["attribute"]
      }
    ]
  }
}
