<?php
/**
 * BN Telecom functions and definitions
 */

function bn_telecom_setup() {
    // Soporte para títulos de página
    add_theme_support( 'title-tag' );
    
    // Soporte para imágenes destacadas
    add_theme_support( 'post-thumbnails' );
    
    // Registrar menús de navegación
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'bn-telecom' ),
    ) );
}
add_action( 'after_setup_theme', 'bn_telecom_setup' );

function bn_telecom_scripts() {
    // Encolar el estilo principal del tema
    wp_enqueue_style( 'bn-telecom-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'bn_telecom_scripts' );
