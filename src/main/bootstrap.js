(function (global, args) {
	load(args.shift());
	var main = new Make.Main();
	main.initGlobalScope(global);
	load('build.js');
	main.getProject().runBody(global);
	main.getProject().run(args.shift(), args);
}(this, arguments));
