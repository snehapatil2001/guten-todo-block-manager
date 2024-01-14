<?php
/**
 * Plugin Name:       Todo list
 * Description:       A Todo list.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Sneha Patil
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       todo-list
 *
 * @package           to-do-list
 */

function blocks_todo_list_init() {

    register_block_type(
        __DIR__ . '/build/list-info',
        array()
    );
}
add_action( 'init', 'blocks_todo_list_init' );
