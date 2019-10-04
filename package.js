Package.describe({
  name: 'bigowl:accounts-apple',
  version: '0.0.1',
  summary: 'OAuth2 for Sign in with Apple',
  git: 'https://github.com/jramer/accounts-apple',
  documentation: 'README.md',
});

Package.onUse(api => {
  api.use(['ecmascript']);
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('bigowl:apple-oauth');
  api.imply('bigowl:apple-oauth');

  api.use(['accounts-ui', 'bigowl:apple-config-ui'], ['client', 'server'], {
    weak: true,
  });
  api.addFiles('notice.js');

  api.addFiles('apple.js');
});
