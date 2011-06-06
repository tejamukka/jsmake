/**
 * @class Contains methods for system interaciont and informations
 */
jsmake.Sys = {
	/**
	 * Returns if OS is Windows
	 * @returns true if running on Windows
	 */
	isWindowsOs: function () {
		return jsmake.Fs.getPathSeparator() === '\\';
	},
	runCommand: function (command, opts) {
		return runCommand(command, opts);
	},
	/**
	 * Create a runner object, used to define and invoke an external program
	 * @param {String} command the path of the command executable
	 * @return {jsmake.CommandRunner} CommandRunner instance to fluently configure and run command
	 * @see jsmake.CommandRunner
	 * @example
	 * // runs '/path/to/cmd.exe par1 par2 par3 par4'
	 * jsmake.Sys.createRunner('/path/to/cmd.exe')
	 *     .args('par1', 'par2')
	 *     .args([ 'par3', 'par4' ])
	 *     .run();
	 */
	createRunner: function (command) {
		return new jsmake.CommandRunner(command);
	},
	/**
	 * Returns environment variable value
	 * @param {String} name name of the environment variable
	 * @param {String} def default value to return if environment variable not defined
	 * @returns {String} environment variable value or def
	 */
	getEnvVar: function (name, def) {
		return java.lang.System.getenv(name) || def;
	},
	/**
	 * Log message to the console
	 * @param {String} msg the message to log
	 */
	log: function (msg) {
		print(msg);
	}
};