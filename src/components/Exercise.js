import React from 'react';
import ExerciseName from './ExerciseName';
import ExerciseHeaders from './ExerciseHeaders';
import ExerciseSets from './ExerciseSets';

function Exercise() {

	return (
		<div className="Exercise">
			<ExerciseName />
			<table>
				<ExerciseHeaders />
				<ExerciseSets />
			</table>
		</div>
	);
}

export default Exercise;
