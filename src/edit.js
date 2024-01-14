import { __ } from '@wordpress/i18n';
import { RawHTML } from '@wordpress/element';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import './editor.scss';

export default function Edit() {
    return (
        <div {...useBlockProps()}>
            <h2>{wp.data.select('core/editor').getEditedPostAttribute('title')}</h2>
        </div>
    );
}