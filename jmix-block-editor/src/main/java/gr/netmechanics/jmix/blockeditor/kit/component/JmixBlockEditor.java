package gr.netmechanics.jmix.blockeditor.kit.component;

import com.vaadin.flow.component.AbstractSinglePropertyField;
import com.vaadin.flow.component.AttachEvent;
import com.vaadin.flow.component.ComponentEvent;
import com.vaadin.flow.component.ComponentUtil;
import com.vaadin.flow.component.CompositionNotifier;
import com.vaadin.flow.component.DomEvent;
import com.vaadin.flow.component.EventData;
import com.vaadin.flow.component.Focusable;
import com.vaadin.flow.component.HasHelper;
import com.vaadin.flow.component.HasLabel;
import com.vaadin.flow.component.HasSize;
import com.vaadin.flow.component.HasStyle;
import com.vaadin.flow.component.InputNotifier;
import com.vaadin.flow.component.KeyNotifier;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.dependency.NpmPackage;
import com.vaadin.flow.component.shared.ClientValidationUtil;
import com.vaadin.flow.component.shared.HasClientValidation;
import com.vaadin.flow.component.shared.HasTooltip;
import com.vaadin.flow.component.shared.HasValidationProperties;
import com.vaadin.flow.data.binder.HasValidator;
import com.vaadin.flow.data.binder.ValidationResult;
import com.vaadin.flow.data.binder.ValidationStatusChangeEvent;
import com.vaadin.flow.data.binder.ValidationStatusChangeListener;
import com.vaadin.flow.data.binder.Validator;
import com.vaadin.flow.shared.Registration;
import io.jmix.flowui.kit.component.HasTitle;

/**
 * @author Panos Bariamis (pbaris)
 */
@Tag("jmix-block-editor")
@NpmPackage(value = "@editorjs/editorjs", version = "2.30.8")
@NpmPackage(value = "@editorjs/header", version = "2.8.8")
@NpmPackage(value = "@editorjs/link", version = "2.6.2")
@NpmPackage(value = "@editorjs/raw", version = "2.5.1")
@NpmPackage(value = "@editorjs/simple-image", version = "1.6.0")
@NpmPackage(value = "@editorjs/checklist", version = "1.6.0")
@NpmPackage(value = "@editorjs/list", version = "2.0.8")
@NpmPackage(value = "@editorjs/embed", version = "2.7.6")
@NpmPackage(value = "@editorjs/quote", version = "2.7.6")
@NpmPackage(value = "@editorjs/warning", version = "1.4.1")
@NpmPackage(value = "@editorjs/code", version = "2.9.3")
@NpmPackage(value = "@editorjs/table", version = "2.4.5")
@NpmPackage(value = "@editorjs/underline", version = "1.2.1")
@NpmPackage(value = "@editorjs/delimiter", version = "1.4.2")
@NpmPackage(value = "@editorjs/paragraph", version = "2.11.7")
@NpmPackage(value = "@editorjs/inline-code", version = "1.5.1")
@NpmPackage(value = "@editorjs/marker", version = "1.4.0")
@JsModule("./src/block-editor/jmix-block-editor.js")
public class JmixBlockEditor extends AbstractSinglePropertyField<JmixBlockEditor, String>
    implements CompositionNotifier, Focusable<JmixBlockEditor>, HasClientValidation, HasHelper,
    HasLabel, HasTitle, HasSize, HasStyle, HasTooltip, HasValidationProperties,
    HasValidator<String>, InputNotifier, KeyNotifier {

    protected static final String BLOCK_EDITOR_VALUE_CHANGED_EVENT = "value-changed";
    protected static final String PROPERTY_VALUE = "value";

    protected BlockEditorValidationSupport validationSupport;

    public JmixBlockEditor() {
        super(PROPERTY_VALUE, "{}", true);

        ComponentUtil.addListener(this, JmixBlockEditorValueChangedEvent.class, this::onBlockEditorValueChangedEvent);

        initComponent();
    }

    protected void initComponent() {
        if ((getElement().getProperty(PROPERTY_VALUE) == null)) {
            setPresentationValue(getEmptyValue());
        }

        setInvalid(false);

        addValueChangeListener(e -> validate());
        addClientValidatedEventListener(e -> validate());
    }

    /**
     * Determines whether the field is marked as input required.
     *
     * @return {@code true} if the input is required, {@code false} otherwise
     */
    public boolean isRequired() {
        return getElement().getProperty("required", false);
    }

    /**
     * Specifies that the user must fill in a value.
     *
     * @param required the boolean value to set
     */
    public void setRequired(boolean required) {
        getElement().setProperty("required", required);
        getValidationSupport().setRequired(required);
    }

    @Override
    protected void setPresentationValue(String newPresentationValue) {
        getElement().setProperty(PROPERTY_VALUE, newPresentationValue);
    }

    @Override
    public String getEmptyValue() {
        return "{}";
    }

    @Override
    public void setRequiredIndicatorVisible(boolean requiredIndicatorVisible) {
        super.setRequiredIndicatorVisible(requiredIndicatorVisible);
        getValidationSupport().setRequired(requiredIndicatorVisible);
    }

    @Override
    public Validator<String> getDefaultValidator() {
        return (value, context) -> getValidationSupport().isInvalid(value)
            ? ValidationResult.ok()
            : ValidationResult.error("");
    }

    @Override
    public Registration addValidationStatusChangeListener(ValidationStatusChangeListener<String> listener) {
        return addClientValidatedEventListener((event) ->
            listener.validationStatusChanged(new ValidationStatusChangeEvent<>(this, !isInvalid())));
    }

    protected void validate() {
        setInvalid(getValidationSupport().isInvalid(getValue()));
    }

    @Override
    protected void onAttach(AttachEvent attachEvent) {
        super.onAttach(attachEvent);
        ClientValidationUtil.preventWebComponentFromModifyingInvalidState(this);
    }

    protected void onBlockEditorValueChangedEvent(JmixBlockEditorValueChangedEvent event) {
        handleValueChanged(event.isFromClient(), event.getValue());
    }

    protected void handleValueChanged(boolean isFromClient, String newValue) {
        setModelValue(newValue, isFromClient);
    }

    protected BlockEditorValidationSupport getValidationSupport() {
        if (this.validationSupport == null) {
            this.validationSupport = new BlockEditorValidationSupport(this);
        }

        return validationSupport;
    }

    /**
     * An event fired when the value of a {@link JmixBlockEditor} changes.
     */
    @DomEvent(BLOCK_EDITOR_VALUE_CHANGED_EVENT)
    public static class JmixBlockEditorValueChangedEvent extends ComponentEvent<JmixBlockEditor> {

        protected String value;

        public JmixBlockEditorValueChangedEvent(JmixBlockEditor source, boolean fromClient, @EventData("event.detail.value") String value) {
            super(source, fromClient);
            this.value = value;
        }

        /**
         * Returns the new value that triggered this value change event.
         *
         * @return the new value
         */
        public String getValue() {
            return value;
        }
    }
}
