<?php

/**
 * Registra Padrões de Bloco do Tema
 * 
 */
function souciencia_register_block_patterns() {

    register_block_pattern(
        'souciencia/o-que-diz-a-ciencia',
        array(
            'title'       => __( 'O que diz a Ciência', 'souciencia' ),
            'description' => __( 'Um padrão de bloco que exibe informações sobre o que a ciência diz sobre um determinado assunto.', 'souciencia' ),
            'categories'  => array( 'text' ),
            'content'     => '
            <!-- wp:group {"align":"full","style":{"elements":{"link":{"color":{"text":"var:preset|color|palette-color-9"}}},"spacing":{"padding":{"top":"var:preset|spacing|70","bottom":"var:preset|spacing|70"}}},"backgroundColor":"palette-color-12","textColor":"palette-color-9","layout":{"type":"constrained"},"blockVisibility":{"hideBlock":true}} -->
            <div class="wp-block-group alignfull has-palette-color-9-color has-palette-color-12-background-color has-text-color has-background has-link-color" style="padding-top:var(--wp--preset--spacing--70);padding-bottom:var(--wp--preset--spacing--70)">
            
            <!-- wp:heading {"style":{"elements":{"link":{"color":{"text":"var:preset|color|palette-color-9"}}}},"textColor":"palette-color-9"} -->
            <h2 class="wp-block-heading has-palette-color-9-color has-text-color has-link-color">O que diz a Ciência</h2>
            <!-- /wp:heading -->
            
            <!-- wp:paragraph { "placeholder": "Insira texto com argumentos sobre o que a Ciência diz sobre este assunto..." } -->
            <p></p>
            <!-- /wp:paragraph -->

            <!-- wp:heading {"level":3,"style":{"elements":{"link":{"color":{"text":"var:preset|color|palette-color-9"}}}},"textColor":"palette-color-9"} -->
            <h3 class="wp-block-heading has-palette-color-9-color has-text-color has-link-color">Fontes</h3>
            <!-- /wp:heading -->
            
            <!-- wp:list -->
            <ul>
            <!-- wp:list-item { "placeholder": "Insira um link com uma referência" } -->
            <li></li>
            <!-- /wp:list-item -->
            </ul>
            <!-- /wp:list -->

            </div>
            <!-- /wp:group -->',
        )
    );

}
add_action( 'init', 'souciencia_register_block_patterns' );
