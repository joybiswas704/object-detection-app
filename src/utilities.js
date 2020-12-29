export const drawRect = (detections, ctx) => {
	detections.forEach((prediction) => {
		// get prediction results
		const [x, y, width, height] = prediction['bbox'];
		const text = prediction['class'];

		// set styling
		const color = 'red';
		ctx.strokeStyle = color;
		ctx.font = '28px Arial';
		ctx.fillStyle = color;

		// draw rectangle and text
		ctx.beginPath();
		ctx.fillText(text, x, y);
		ctx.rect(x, y, width, height);
		ctx.stroke();
	});
};
