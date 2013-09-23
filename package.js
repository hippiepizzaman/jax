Package.describe({
  summary: "jax pack tquery and physi"
});

Package.on_use(function (api) {
  
api.add_files([
    'lib/tquery.js',
	'lib/physi.js',
  ], 'client'
  );
});
