Package.describe({
  name: 'bigowl:accounts-apple',
  version: '1.0.2',
  summary: 'OAuth2 for Sign in with Apple',
  git: 'https://github.com/jramer/accounts-apple',
  documentation: 'README.md',
});

Package.onUse(api => {
  api.versionsFrom('1.8.1');
  api.use(['ecmascript']);
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('bigowl:apple-oauth@1.0.2');
  api.imply('bigowl:apple-oauth');

  api.use(
    ['accounts-ui', 'bigowl:apple-config-ui@0.0.1'],
    ['client', 'server'],
    {
      weak: true,
    },
  );
  api.addFiles('notice.js');

  api.addFiles('apple.js');
});
