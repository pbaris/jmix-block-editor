package gr.netmechanics.jmix.autoconfigure.blockeditor;

import gr.netmechanics.jmix.blockeditor.BlockEditorConfiguration;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.context.annotation.Import;

/**
 * Panos Bariamis (pbaris)
 */
@AutoConfiguration
@Import({BlockEditorConfiguration.class})
public class BlockEditorAutoConfiguration {
}

