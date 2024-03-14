<?php

if ( function_exists('register_block_style') ) {
    /**
     * Registra estilos de blocos do tema
     *
     * @since 0.0.1
     *
     * @return void
     */
    function souciencia_register_block_styles() {

        register_block_style(
            'core/column',
            array(
                'name'  => 'souciencia-clickable-card',
                'label' =>  __('Cartão clicável', 'sesilab'),
                'is_default' => false            
            )
        );

        register_block_style(
            'core/group',
            array(
                'name'  => 'souciencia-clickable-card',
                'label' =>  __('Cartão clicável', 'sesilab'),
                'is_default' => false            
            )
        );

    }
    add_action('init', 'souciencia_register_block_styles');
}
