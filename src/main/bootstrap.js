(function (global, args) {
	load(args.shift());
	var main = new jsmake.Main();
	main.init(global);
	load('build.js');
	main.runTask(args.shift(), args);
}(this, arguments));
