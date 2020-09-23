<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
if(file_exists('wp-config-local.php')) {
	include('wp-config-local.php');
} else {
	define('DB_NAME', 'MYSQL_DATABASE');

	/** MySQL database username */
	define('DB_USER', 'MYSQL_USER');

	/** MySQL database password */
	define('DB_PASSWORD', 'MYSQL_PASSWORD');

	/** MySQL hostname */
	define('DB_HOST', 'wordpress_db:3306');

	/** Database Charset to use in creating database tables. */
	define('DB_CHARSET', 'utf8');

	/** The Database Collate type. Don't change this if in doubt. */
	define('DB_COLLATE', '');
}

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '0V)3kE_61Lhu:qPF.!)dta}Y+0FKX+ob{q%1R*b>gie:[)[@W;!Z),ujKvj:8!)v');
define('SECURE_AUTH_KEY',  'e^Pu=lTNfupm)iIaNjc8RL0eE;hG+%@vn+K905?0}V`wUuK7j$tY>PTW3QY$DGC%');
define('LOGGED_IN_KEY',    'r%>=WKuKtt;A)n$`nb+t/ABKCZ&[.nGxFrAgba-!WTD`S$f`c3qbF`s,PEf-xE:#');
define('NONCE_KEY',        '!oDbaMmr+R@HHhW|Jyo49),B}t?(O-2hd}(P d5{&bQZyP1P10`t9J;31n2yLz79');
define('AUTH_SALT',        'B=~_0;;B})?6ao{zR$y}pV:fx&TDsjIPVrk7Yi7ld,dUNg:!/e|}-DLT?RN2.s3)');
define('SECURE_AUTH_SALT', ']8EZCu2g!PLjMWhr)$<KWt-HdGg=Aryv_Q<4%)Y`^wH:]3m(x,DJo;6OsRiVEa>>');
define('LOGGED_IN_SALT',   'Tx^ml)PXbu^KA2F-TA04TLMRGjNR@zl[fqx[a=w^_%[AJqA5YiCYCzq.;nhJwz5}');
define('NONCE_SALT',       '{6qAK!~9.Nx?M>e/I%4MNvJcmL2.@~Sg-hJ61li09%Ddb6UldY$cl*4RP4vlu_;p');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_portfolio2v';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
