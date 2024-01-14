import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';

registerBlockType('blocks-todo/info', {
	edit: Edit,
	save,
});
