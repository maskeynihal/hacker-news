import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { LinearProgress } from "@material-ui/core";

export default ({ skeleton = false }) => {
	return (
		<div>
			{skeleton ? (
				<Skeleton variant="text" />
			) : (
				<LinearProgress></LinearProgress>
			)}
		</div>
	);
};
