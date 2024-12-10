package gr.netmechanics.jmix.blockeditor.kit.component;

import java.io.Serializable;

import com.vaadin.flow.component.shared.ValidationUtil;
import com.vaadin.flow.data.binder.ValidationResult;

/**
 * @author Panos Bariamis (pbaris)
 */
public class BlockEditorValidationSupport implements Serializable {

    private final JmixBlockEditor field;

    private boolean required;

    BlockEditorValidationSupport(JmixBlockEditor field) {
        this.field = field;
    }

    void setRequired(boolean required) {
        this.required = required;
    }

    boolean isInvalid(String value) {
        ValidationResult requiredValidation = ValidationUtil.checkRequired(required, value, field.getEmptyValue());
        return requiredValidation.isError();
    }
}
