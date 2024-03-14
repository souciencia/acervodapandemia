<?php

/**
 * Registers the temas post type.
 */
function souciencia_tema_post_type_init() {

    $icon_placeholder = esc_url( get_stylesheet_directory_uri() ) . '/assets/images/icon_text.svg';

    // Registers tema post type 
    $args = array(
        'labels'             => array(
            'name'                  => _x( 'Temas', 'Post type general name', 'souciencia' ),
            'singular_name'         => _x( 'Tema', 'Post type singular name', 'souciencia' ),
            'menu_name'             => _x( 'Temas', 'Admin Menu text', 'souciencia' ),
            'name_admin_bar'        => _x( 'Tema', 'Add New on Toolbar', 'souciencia' ),
            'add_new'               => __( 'Adicionar Nova', 'souciencia' ),
            'add_new_item'          => __( 'Adicionar Nova Tema', 'souciencia' ),
            'new_item'              => __( 'Nova Tema', 'souciencia' ),
            'edit_item'             => __( 'Editar Tema', 'souciencia' ),
            'view_item'             => __( 'Ver Tema', 'souciencia' ),
            'all_items'             => __( 'Todos as Temas', 'souciencia' ),
            'search_items'          => __( 'Pesquisar Temas', 'souciencia' ),
            'parent_item_colon'     => __( 'Temas raiz:', 'souciencia' ),
            'not_found'             => __( 'Nenhuma Tema encontrado.', 'souciencia' ),
            'not_found_in_trash'    => __( 'Nenhuma Tema encontrado na lixeira.', 'souciencia' ),
            'featured_image'        => _x( 'Imagem de capa do Tema', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'souciencia' ),
            'set_featured_image'    => _x( 'Configurar imagem de capa', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'souciencia' ),
            'remove_featured_image' => _x( 'Remover imagem de capa', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'souciencia' ),
            'use_featured_image'    => _x( 'Usar como imagem de capa', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'souciencia' ),
            'archives'              => _x( 'Lista de Temas', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'souciencia' ),
            'insert_into_item'      => _x( 'Inserir na Tema', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'souciencia' ),
            'uploaded_to_this_item' => _x( 'Enviado para esta Tema', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'souciencia' ),
            'filter_items_list'     => _x( 'Filtrar lista de Temas', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'souciencia' ),
            'items_list_navigation' => _x( 'Navegação na lista de Temas', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'souciencia' ),
            'items_list'            => _x( 'Lista de Temas', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'souciencia' ),
        ),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'temas' ),
        'capability_type'    => 'post',
        'has_archive'        => false,
        'hierarchical'       => false,
        'show_in_rest'       => true,
        'menu_position'      => null,
        'menu_icon'          => 'dashicons-format-quote',
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail' ),
        'template' => array(
            // First group block
            array(
                'core/group',
                array(
                    'align' => 'full',
                    'style' => array(
                        'spacing' => array(
                            'padding' => array(
                                'top'    => 'var:preset|spacing|70',
                                'bottom' => 'var:preset|spacing|70',
                            ),
                            'margin' => array(
                                'top'    => '0',
                                'bottom' => '0',
                            ),
                        ),
                    ),
                    'backgroundColor' => 'palette-color-8',
                    'layout' => array(
                        'type' => 'constrained',
                    ),
                ),
                array(
                    // Paragraph block within the group
                    array(
                        'core/paragraph',
                        array(
                            'placeholder' => 'Insira aqui a descrição do Tema...',
                        ),
                    ),
                )
            ),
            // Second group block
            array(
                'core/group',
                array(
                    'align' => 'full',
                    'style' => array(
                        'spacing' => array(
                            'padding' => array(
                                'top'    => 'var:preset|spacing|80',
                                'bottom' => 'var:preset|spacing|80',
                            ),
                        ),
                    ),
                    'layout' => array(
                        'type' => 'constrained',
                    )
                ),
                array(
                    // Heading block within the group
                    array(
                        'core/heading',
                        array(
                            'level' => 2,
                            'content' => 'Evidências em destaque',
                        ),
                    ),
                    // Columns block within the group
                    array(
                        'core/columns',
                        array(
                            'style' => array(
                                'spacing' => array(
                                    'padding' => array(
                                        'top'    => '0',
                                        'bottom' => '0',
                                    ),
                                    'blockGap' => array(
                                        'top'  => 'var:preset|spacing|50',
                                        'left' => 'var:preset|spacing|50',
                                    ),
                                ),
                            )
                        ),
                         array(
                            // First column block
                            array(
                                'core/column',
                                array(
                                    'width' => '50%',
                                    'style' => array(
                                        'spacing' => array(
                                            'padding' => array(
                                                'top'    => 'var:preset|spacing|40',
                                                'bottom' => 'var:preset|spacing|40',
                                                'left'   => 'var:preset|spacing|40',
                                                'right'  => 'var:preset|spacing|40',
                                            ),
                                        ),
                                    ),
                                    'className' => 'is-style-souciencia-clickable-card'
                                ),
                                array(
                                    // Another columns block within the column
                                    array(
                                        'core/columns',
                                        array(
                                            'isStackedOnMobile' => false,
                                            'style' => array(
                                                'layout' => array(
                                                    'selfStretch' => 'fixed',
                                                    'flexSize'    => '50%',
                                                ),
                                            )
                                        ),
                                        array(
                                            // Another column block within the columns
                                            array(
                                                'core/column',
                                                array(
                                                    'width' => '100px'
                                                ),
                                                array(
                                                    // Image block within the column
                                                    array(
                                                        'core/image',
                                                        array(
                                                            'url' => $icon_placeholder,
                                                            'aspectRatio' => '1',
                                                            'width' => '100px',
                                                            'sizeSlug' => 'full',
                                                            'linkDestination' => 'none',
                                                        ),
                                                    ),
                                                )
                                            ),
                                            // Another column block within the columns
                                            array(
                                                'core/column',
                                                array(),
                                                array(
                                                    // Heading block within the column
                                                    array(
                                                        'core/heading',
                                                        array(
                                                            'level' => 3,
                                                            'style' => array(
                                                                'spacing' => array(
                                                                    'margin' => array(
                                                                        'right' => '0',
                                                                        'left'  => '0',
                                                                        'top'   => '0',
                                                                        'bottom' => '0',
                                                                    ),
                                                                ),
                                                                'fontSize' => 'large',
                                                            ),
                                                            'placeholder' => 'Nome com link da evidência 1',
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            // Second column block
                            array(
                                'core/column',
                                array(
                                    'width' => '50%',
                                    'style' => array(
                                        'spacing' => array(
                                            'padding' => array(
                                                'top'    => 'var:preset|spacing|40',
                                                'bottom' => 'var:preset|spacing|40',
                                                'left'   => 'var:preset|spacing|40',
                                                'right'  => 'var:preset|spacing|40',
                                            ),
                                        ),
                                    ),
                                    'className' => 'is-style-souciencia-clickable-card'
                                ),
                                array(
                                    // Another columns block within the column
                                    array(
                                        'core/columns',
                                        array(
                                            'isStackedOnMobile' => false,
                                            'style' => array(
                                                'layout' => array(
                                                    'selfStretch' => 'fixed',
                                                    'flexSize'    => '50%',
                                                ),
                                            )
                                        ),
                                        array(
                                            // Another column block within the columns
                                            array(
                                                'core/column',
                                                array(
                                                    'width' => '100px'
                                                ),
                                                array(
                                                    // Image block within the column
                                                    array(
                                                        'core/image',
                                                        array(
                                                            'url' => $icon_placeholder,
                                                            'aspectRatio' => '1',
                                                            'width' => '100px',
                                                            'sizeSlug' => 'full',
                                                            'linkDestination' => 'none',
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            // Another column block within the columns
                                            array(
                                                'core/column',
                                                array(),
                                                array(
                                                    // Heading block within the column
                                                    array(
                                                        'core/heading',
                                                        array(
                                                            'level' => 3,
                                                            'style' => array(
                                                                'spacing' => array(
                                                                    'margin' => array(
                                                                        'top'    => '0',
                                                                        'bottom' => '0',
                                                                    ),
                                                                ),
                                                                'layout' => array(
                                                                    'selfStretch' => 'fit',
                                                                    'flexSize'    => null,
                                                                ),
                                                                'fontSize' => 'large',
                                                            ),
                                                            'placeholder' => 'Nome com link da evidência 2',
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                )
                            ),
                        ),
                    ),
                     // Columns block within the group
                     array(
                        'core/columns',
                        array(
                            'style' => array(
                                'spacing' => array(
                                    'padding' => array(
                                        'top'    => '0',
                                        'bottom' => '0',
                                    ),
                                    'blockGap' => array(
                                        'top'  => 'var:preset|spacing|50',
                                        'left' => 'var:preset|spacing|50',
                                    ),
                                ),
                            )
                        ),
                         array(
                            // First column block
                            array(
                                'core/column',
                                array(
                                    'width' => '50%',
                                    'style' => array(
                                        'spacing' => array(
                                            'padding' => array(
                                                'top'    => 'var:preset|spacing|40',
                                                'bottom' => 'var:preset|spacing|40',
                                                'left'   => 'var:preset|spacing|40',
                                                'right'  => 'var:preset|spacing|40',
                                            ),
                                        ),
                                    ),
                                    'className' => 'is-style-souciencia-clickable-card'
                                ),
                                array(
                                    // Another columns block within the column
                                    array(
                                        'core/columns',
                                        array(
                                            'isStackedOnMobile' => false,
                                            'style' => array(
                                                'layout' => array(
                                                    'selfStretch' => 'fixed',
                                                    'flexSize'    => '50%',
                                                ),
                                            )
                                        ),
                                        array(
                                            // Another column block within the columns
                                            array(
                                                'core/column',
                                                array(
                                                    'width' => '100px'
                                                ),
                                                array(
                                                    // Image block within the column
                                                    array(
                                                        'core/image',
                                                        array(
                                                            'url' => $icon_placeholder,
                                                            'aspectRatio' => '1',
                                                            'width' => '100px',
                                                            'sizeSlug' => 'full',
                                                            'linkDestination' => 'none',
                                                        ),
                                                    ),
                                                )
                                            ),
                                            // Another column block within the columns
                                            array(
                                                'core/column',
                                                array(),
                                                array(
                                                    // Heading block within the column
                                                    array(
                                                        'core/heading',
                                                        array(
                                                            'level' => 3,
                                                            'style' => array(
                                                                'spacing' => array(
                                                                    'margin' => array(
                                                                        'right' => '0',
                                                                        'left'  => '0',
                                                                        'top'   => '0',
                                                                        'bottom' => '0',
                                                                    ),
                                                                ),
                                                                'fontSize' => 'large',
                                                            ),
                                                            'placeholder' => 'Nome com link da evidência 3',
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            // Second column block
                            array(
                                'core/column',
                                array(
                                    'width' => '50%',
                                    'style' => array(
                                        'spacing' => array(
                                            'padding' => array(
                                                'top'    => 'var:preset|spacing|40',
                                                'bottom' => 'var:preset|spacing|40',
                                                'left'   => 'var:preset|spacing|40',
                                                'right'  => 'var:preset|spacing|40',
                                            ),
                                        ),
                                    ),
                                    'className' => 'is-style-souciencia-clickable-card'
                                ),
                                array(
                                    // Another columns block within the column
                                    array(
                                        'core/columns',
                                        array(
                                            'isStackedOnMobile' => false,
                                            'style' => array(
                                                'layout' => array(
                                                    'selfStretch' => 'fixed',
                                                    'flexSize'    => '50%',
                                                ),
                                            )
                                        ),
                                        array(
                                            // Another column block within the columns
                                            array(
                                                'core/column',
                                                array(
                                                    'width' => '100px'
                                                ),
                                                array(
                                                    // Image block within the column
                                                    array(
                                                        'core/image',
                                                        array(
                                                            'url' => $icon_placeholder,
                                                            'aspectRatio' => '1',
                                                            'width' => '100px',
                                                            'sizeSlug' => 'full',
                                                            'linkDestination' => 'none',
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            // Another column block within the columns
                                            array(
                                                'core/column',
                                                array(),
                                                array(
                                                    // Heading block within the column
                                                    array(
                                                        'core/heading',
                                                        array(
                                                            'level' => 3,
                                                            'style' => array(
                                                                'spacing' => array(
                                                                    'margin' => array(
                                                                        'top'    => '0',
                                                                        'bottom' => '0',
                                                                    ),
                                                                ),
                                                                'layout' => array(
                                                                    'selfStretch' => 'fit',
                                                                    'flexSize'    => null,
                                                                ),
                                                                'fontSize' => 'large',
                                                            ),
                                                            'placeholder' => 'Nome com link da evidência 4',
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                )
                            ),
                        ),
                    ),
                    // Spacer block within the group
                    array(
                        'core/spacer',
                        array(
                            'height' => '48px',
                        ),
                    ),
                    // Buttons block within the group
                    array(
                        'core/buttons',
                        array(
                            'layout' => array(
                                'type'           => 'flex',
                                'justifyContent' => 'center',
                            ),
                            'fontSize' => 'large'
                        ),
                        array(
                            // Button block within the buttons
                            array(
                                'core/button',
                                array(
                                    'className' => 'is-style-fill',
                                    'text' => 'Ver todas as evidências',
                                    'placeholder' => 'Ver todas as evidências',
                                    'target' => '_blank',
                                    'link' => 'https://acervopandemia-souciencia.unifesp.br/categoria-tematica-da-evidencia/',
                                ),
                            ),
                        ),
                    ),
                ),
            ),
            array(
                'core/pattern',
                array(
                    'slug' => 'souciencia/o-que-diz-a-ciencia',
                )
            )
        )            
    );

    register_post_type( 'temas', $args );
}
add_action( 'init', 'souciencia_tema_post_type_init' );

/* Muda o breadcrumb do tema para levar para a página do tema */
add_filter(
    'blocksy:breadcrumbs:items-array',
    function ($items) {
        
        if ( is_singular('temas') ) {
            $items[1]['url'] = '/temas';
            $items[1]['name'] = 'Temas';

            return $items;
        }
        return $items;
    }
);