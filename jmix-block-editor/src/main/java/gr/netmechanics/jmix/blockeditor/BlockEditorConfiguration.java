package gr.netmechanics.jmix.blockeditor;

import io.jmix.core.annotation.JmixModule;
import io.jmix.eclipselink.EclipselinkConfiguration;
import io.jmix.flowui.FlowuiConfiguration;
import io.jmix.flowui.sys.registration.ComponentRegistration;
import io.jmix.flowui.sys.registration.ComponentRegistrationBuilder;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

/**
 * Panos Bariamis (pbaris)
 */
@Configuration
@ComponentScan
@ConfigurationPropertiesScan
@JmixModule(dependsOn = {EclipselinkConfiguration.class, FlowuiConfiguration.class})
@PropertySource(name = "gr.netmechanics.jmix.blockeditor", value = "classpath:/gr/netmechanics/jmix/blockeditor/module.properties")
public class BlockEditorConfiguration {

    @Bean
    public ComponentRegistration blockEditor() {
        return ComponentRegistrationBuilder.create(BlockEditor.class)
            .withComponentLoader("blockEditor", BlockEditorLoader.class)
            .build();
    }
}
