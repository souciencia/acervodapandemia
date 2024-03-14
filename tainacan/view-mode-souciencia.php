<?php if ( have_posts() ) : ?>
	<ul class="tainacan-souciencia-grid-container">

		<?php $item_index = 0; while ( have_posts() ) : the_post(); ?>
			<?php
                $item = tainacan_get_item();
                $mime_type = $item->get_document_mimetype();

                if (
                    $mime_type == 'url' &&
                    (
                        str_contains($item->get_document_url(), 'youtube') ||
                        str_contains($item->get_document_url(), 'vimeo') ||
                        str_contains($item->get_document_url(), '.mp4')
                    )
                )
                    $mime_type = 'video';
                
            ?>
			<li class="tainacan-souciencia-grid-item">
				<a href="<?php echo souciencia_get_item_link_for_navigation(get_permalink(), $item_index); ?>">
                    <div class="souciencia-grid-item-thumbnail placeholder">
                        <?php echo '<img src="' . esc_url( tainacan_get_the_mime_type_icon($mime_type) ) . '" alt="Ícone para item do tipo ' . $mime_type. '">'?>
                        <div class="skeleton"></div> 
                    </div>

					<?php
							$collection_id = str_replace('_item', '', str_replace('tnc_col_', '', get_post_type()));
							$title_class = 'metadata-title';
						?>

					<div class="<?php echo $title_class; ?>">
						<h3><?php the_title(); ?></h3>
					</div>
				</a>
			</li>	
		
		<?php $item_index++; endwhile; ?>
	
	</ul>

<?php else : ?>
	<div class="tainacan-souciencia-grid-container">
		<section class="section">
			<div class="content has-text-gray-4 has-text-centered">
				<p>
					<span class="icon is-large">
						<i class="tainacan-icon tainacan-icon-48px tainacan-icon-items"></i>
					</span>
				</p>
				<p><?php echo __( 'Nenhum item encontrado.','souciencia' ); ?></p>
			</div>
		</section>
	</div>
<?php endif; ?>
