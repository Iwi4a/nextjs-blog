<?php 

//-------------------------------------------------------------------
//REGISTERS MENU
if (function_exists('register_nav_menus')) {
	register_nav_menus(array('primary' => 'Header Navigation'));
}
//-------------------------------------------------------------------
//ADD THUMBNAIL IMAGES SUPPORT AND SIZES
if (function_exists('add_theme_support')) {
	add_theme_support('post-thumbnails');
}
if (function_exists('add_image_size')) {
	
}
//-------------------------------------------------------------------
//REGISTER CUSTOM POST
function create_post_type() { 
	register_post_type('projects', 
		array('labels' => 
				array (
					'name' => __("Projects"),
					'singular_name' => __('Project')
					),
					'public' => true,
					'menu_position' => 5,
					'rewrite' => array('slug' => 'projects'),
					'show_in_rest' => true,
					'supports' => array('title', 'editor', 'thumbnail', ),
					'graphql_single_name' => 'project',
					'graphql_plural_name' => 'projects',
					'show_in_graphql' => true,
				),
	);
	register_post_type('blog',
		
		array(
			'labels' => 
				array (
					'name' => __("Blog"),
					'singular_name' => __('blog')
					),
					'public' => true,
					
					'menu_position' => 5,
					'rewrite' => array('slug' => 'blog', ),
					'show_in_rest' => true,
					'supports' => array('title', 'editor', 'thumbnail', ),
					'graphql_single_name' => 'blog',
					'graphql_plural_name' => 'blogs',
					'show_in_graphql' => true,
		)
	);
}
add_action('init', 'create_post_type');


//-------------------------------------------------------------------
//REGISTERING THE SIDE BAR
if(function_exists('register_sidebar')) {
	register_sidebar(array(
		'name' => 'Footer Widgets',
		'id' => 'footer-widgets',
		'description' => 'Place widgets for the footer here',
	));
	//'before_widget' => '<div>',  OPTIONAL
	//'after_widget' => '</div>',  OPTIONAL
}
	
//-------------------------------------------------------------------
//BLOG EXCERPT
function new_excerpt_more($more) {
    return '... <span class="more">continue reading</span>';
}
add_filter('excerpt_more', 'new_excerpt_more', 21 );

add_action('show_admin_bar', '__return_false');

// COMBINE ALL JS
function clean_header() {
    remove_action('wp_head', 'wp_print_scripts');
    remove_action('wp_head', 'wp_print_head_scripts', 9);
    remove_action('wp_head', 'wp_enqueue_scripts', 1);
}

add_action('wp_enqueue_scripts', 'clean_header');





