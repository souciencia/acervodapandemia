<?php
if (! defined('WP_DEBUG')) {
	die( 'Direct access forbidden.' );
}

const TOTAL_DE_MORTOS_ID_METADADO = 15398; // Id do metadado que guarda o total de mortos.

/**
 * Enfileira scripts e estilos necessários.
 */
add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'souciencia-style', get_stylesheet_uri() );
	wp_enqueue_script( 'souciencia-script', get_stylesheet_directory_uri() . '/scripts.js', array(), '1.0.0', true );
	$settings = array(
		'assets_directory' => get_stylesheet_directory_uri() . '/assets'
	);
	wp_localize_script( 'souciencia-script', 'souciencia', $settings );

	
	// Carrega estilos da página de item do Tainacan apenas se necessário.
	$collections_post_types = \Tainacan\Repositories\Repository::get_collections_db_identifiers();
	$post_type = get_post_type();
	if ( in_array($post_type, $collections_post_types) )
		wp_enqueue_style( 'souciencia-tainacan-item-style', get_stylesheet_directory_uri() . '/assets/css/tainacan-single-items.css' );
	
});

/**
 * Adiciona aviso de necropolitica no início da página do item
 */
function souciencia_item_single_page_hero_after() {

	if ( !is_singular() )
		return;

	$collections_post_types = \Tainacan\Repositories\Repository::get_collections_db_identifiers();
	$post_type = get_post_type();

	if ( !in_array($post_type, $collections_post_types) )
		return;

	$tipo_de_evidencia_metadata_id = 60;
	$tipo_de_evidencia_necropolitica_term = 'Necrodiscurso ou Necroconduta';
	
	$item = tainacan_get_item();
	if ( !$item )
		return;

	$item_metadata = $item->get_metadata([ 'id' => $tipo_de_evidencia_metadata_id ]);

	if ( !$item_metadata )
		return;

	$item_metadatum = is_array($item_metadata) ? $item_metadata[0] : $item_metadata;

	if ( !$item_metadatum )
		return;
	
	$metadatum_value = $item_metadatum->get_value();
	$metadatum_value = is_array($metadatum_value) ? $metadatum_value[0] : $metadatum_value;

	if ( $metadatum_value == $tipo_de_evidencia_necropolitica_term  ) : ?>
<div class="tainacan-single-item-hero-notice">
  <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/selo_mentira.png;' ?>"
    alt="<?php _e('Selo alerta de mentira'); ?>" />
  <p><?php _e(' Esta página pode trazer desinformação ou conduta contra evidências científicas. '); ?></p>
</div>
<?php endif;
}
add_action('blocksy:hero:after', 'souciencia_item_single_page_hero_after');

/**
 * Adiciona aviso de necropolitica no início da página do item
 */
function souciencia_item_single_after_attachments() {

	if ( !is_singular() )
		return;

	$item = tainacan_get_item();

	if ( !$item )
		return;

	if ( !empty( $item->get_description() )  ) : ?>
<div class="metadata-slug-descricao tainacan-item-section__metadatum">
  	<h3 class="tainacan-metadata-label"><?php _e('Descrição'); ?></h3>
  	<p class="tainacan-metadata-value" style="font-size: var(--theme-font-size,var(--fontSize));">
    	<?php
			echo $item->get_description();

			$total_mortos = get_post_meta( $item->get_id(), TOTAL_DE_MORTOS_ID_METADADO, true );

			if ( $total_mortos ) {
				$message = 'Até essa data, registrava' . ( ($total_mortos == 1 || $total_mortos == '1') ? '' : 'm' ) . '-se <strong>' . number_format($total_mortos,0,',','.') . '</strong> óbito' . ( ($total_mortos == 1 || $total_mortos == '1') ? '' : 's' ) . ' pela covid-19*.';
				echo '<p style="text-align: center; color: var(--theme-link-initial-color);">' . $message . '<br><small>Dados do site <a href="https://covid.saude.gov.br" target="_blank">https://covid.saude.gov.br</a></small></p>';
			}
		?>
	</p>
</div>
<?php endif;
}
add_action('tainacan-blocksy-single-item-after-attachments', 'souciencia_item_single_after_attachments');


/* Registra o modoe visualização do Sou Ciência */
function souciencia_register_tainacan_view_modes() {
	if ( function_exists( 'tainacan_register_view_mode' ) ) {

		// Grid
		tainacan_register_view_mode('soucienciagrid', array(
			'label' => __( 'Sou Ciência', 'souciencia' ),
			'description' => __( 'Uma simples grade de itens feita para o acervo do Souciencia', 'souciencia' ),
			'icon' => '<span class="icon"><i class="tainacan-icon tainacan-icon-viewcards tainacan-icon-1-25em"></i></span>',
			'dynamic_metadata' => false,
			'template' => get_stylesheet_directory() . '/tainacan/view-mode-souciencia.php'
		));
	}
}
add_action( 'after_setup_theme', 'souciencia_register_tainacan_view_modes' );

/* Constrói links de navegação para próximo e anterior */
function souciencia_get_item_link_for_navigation($item_url, $index) {
		
	if ( $_GET && isset($_GET['paged']) && isset($_GET['perpage']) ) {
		$query = '';
		$perpage = (int)$_GET['perpage'];
		$paged = (int)$_GET['paged'];
		$index = (int)$index;
		$query .= '&pos=' . ( ($paged - 1) * $perpage + $index );
		$query .= '&source_list=' . (is_tax() ? 'term' : 'collection');
		return $item_url . '?' .  $_SERVER['QUERY_STRING'] . $query;
	}
	return $item_url;
}

function souciencia_get_mime_type_icon($image_url, $mime_type) {
	switch($mime_type) {
		case 'image':
		case 'image/png':
		case 'image/jpeg':
		case 'image/gif':
		case 'image/bmp':
		case 'image/webp':
		case 'image/svg+xml':
			$icon_file = 'icon_image';
			break;
		case 'audio':
		case 'audio/midi':
		case 'audio/mpeg':
		case 'audio/mp3':
		case 'audio/webm':
		case 'audio/ogg':
		case 'audio/wav':
			$icon_file = 'icon_audio';
			break;
		case 'video':
		case 'video/webm':
		case 'video/ogg':
		case 'video/mpeg':
		case 'video/mp4':
			$icon_file = 'icon_video';
			break;
		case 'url':
			$icon_file = 'icon_link';
			break;
		case 'text':
		case 'text/plain':
		case 'text/html':
		case 'text/css':
		case 'text/javascript':
		case 'text/csv':
		case 'application/pdf':
		case 'attachment':
		case 'empty':
		default:
			$icon_file = 'icon_text';
	}
	
	return get_stylesheet_directory_uri() . '/assets/images/' . $icon_file . '.svg';
}
add_filter('tainacan-get-the-mime-type-icon', 'souciencia_get_mime_type_icon', 10, 2);

// Estilos de Bloco.
require get_stylesheet_directory() . '/inc/block-styles.php';

// Tipos de post personalizados.
require get_stylesheet_directory() . '/inc/post-types.php';

// Padrões de Bloco
require get_stylesheet_directory() . '/inc/block-patterns.php';