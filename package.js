Package.describe({
  name: 'quave:accounts-apple',
  version: '4.0.0-beta',
  summary: 'OAuth2 for Sign in with Apple - fork from bigowl',
  git: 'https://github.com/quavedev/accounts-apple',
  documentation: 'README.md',
});

Package.onUse(api => {
  api.versionsFrom(['1.8.1', '2.3', '3.0-alpha.15']);
  api.use(['ecmascript']);
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('quave:apple-oauth@4.0.0-beta');
  api.imply('quave:apple-oauth');

  api.use(
    ['accounts-ui'],
    ['client', 'server'],
    {
      weak: true,
    },
  );
  api.addFiles('notice.js');

  api.addFiles('apple.js');
});
