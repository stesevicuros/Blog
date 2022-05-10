import React, { useState } from 'react';

export default function OpenPostLayout() {
	const [showButtons, setShowButtons] = useState(false);

	function handleChange() {
		setShowButtons(prevValue => {
			return !prevValue;
		});
	}

	return (
		<div className='post-main'>
			<div className='open-post'>
				<h4 className='title'>Imam veliki kurac</h4>

				<p className='author'>by urekure123</p>

				<p className='content'>
					Nosila crvenkapa kolace babi kroz
					sumicu, u pola puta sreo je vuk, ona ce
					na to "Zdravo Vuce" a vuk odgovara
					"Zdravo sexy crvenkapice, gdje si se to
					uputila?", sexy crvenkapica kaze "Nosim
					nesto svojoj babi", na sta ce vuk "Sta
					nosis Baci?" i ona baci.
				</p>
				<div className='comment'>
					<i class='fa-regular fa-comment'></i>
					<span>Comments</span>
				</div>
				<hr />
				<form>
					<label>Add comment:</label>
					<input
						onFocus={
							showButtons
								? undefined
								: handleChange
						}
						autoComplete='off'
						type='text'
						placeholder='Your comment...'></input>
					{showButtons && (
						<div className='buttons'>
							<button className='post-button'>
								POST
							</button>
							<button
								onClick={handleChange}
								className='cancel-button'>
								CANCEL
							</button>
						</div>
					)}
				</form>
			</div>
			<div className='comments'>
				<p className='comment-author'>urekure123</p>
				<p className='comment-content'>
					Volim sexy crvenkapice
				</p>
			</div>
		</div>
	);
}
