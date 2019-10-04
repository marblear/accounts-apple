if (
  Package['accounts-ui']
  && !Package['service-configuration']
  && !Object.prototype.hasOwnProperty.call(Package, 'bigowl:apple-config-ui')
) {
  console.warn(
    'Note: You\'re using accounts-ui and accounts-apple,\n'
      + 'but didn\'t install the configuration UI for the Apple\n'
      + 'OAuth. You can install it with:\n'
      + '\n'
      + '    meteor add bigowl:apple-config-ui'
      + '\n',
  );
}
