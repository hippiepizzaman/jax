Package.describe({
  summary: "jax pack"
});

Package.on_use(function (api) {
  api.add_files([
  'lib/three.js',
  'lib/tquery-bundle-require.js',
  'lib/tquery.js',
  'lib/physi.js'
  ], 'client'
  );
});
