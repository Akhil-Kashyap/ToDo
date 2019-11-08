import React from 'react';
import style from './content.module.css';

const content = () => {
	return (
		<div className={style.addtask}>
			<div className={style.group}>
				<div className={style.label}>
					<p>
						<h3>Task Title:</h3> Lorem Ipsum
					</p>
				</div>
			</div>

			<div className={style.group}>
				<div className={style.label}>
					<p>
						<h3>Description:</h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
			</div>

			<div className={style.group}>
				<div className={style.label}>
					<p>
						<h3>Due Date:</h3> 25-11-2019
					</p>
				</div>
			</div>

			<div className={style.group}>
				<div className={style.label}>
					<p>
						<h3>State:</h3> In Progress
					</p>
				</div>
			</div>

			<div className={style.group}>
				<div className={style.label}>
					<p>
						<h3>Assignee:</h3> XYZ
					</p>
				</div>
			</div>

			<input type="button" value="Turn into Work" className={style.add} />
		</div>
	);
};

export default content;
