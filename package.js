Package.describe({
  summary: "jax pack: tquery and physi"
});

Package.on_use(function (api) {
	api.use('three.js','client');
  api.add_files([
'lib/tquery.js'
  'lib/physi.js'
  ], 'client'
  );
});
