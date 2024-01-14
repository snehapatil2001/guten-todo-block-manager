import { useBlockProps } from '@wordpress/block-editor';
import { CheckboxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import './editor.scss';

export default function Edit() {
	const todos = useSelect((select) => {
		const todosStore = select('blocks-todo/datastore');
		return todosStore && todosStore.getTodos();
	}, []);

	return (
		<div {...useBlockProps()}>
			{!todos && (
				<p>
					{__(
						'Please make sure your plugin is activated and configured correctly.',
						'todo-list'
					)}
				</p>
			)}
			{todos && (
				<ul>
					{todos.map((todo) => (
						<li key={todo.id}>
							<CheckboxControl
								label={todo.title}
								checked={todo.completed}
								onChange={(v) => console.log(v)}
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
