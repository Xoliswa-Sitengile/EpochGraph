function drawYAxis(svg, dataAreaBounds, yScale) {
    // Draw axis line
    let line = createSvgElement('line', {
      'y1': dataAreaBounds.y0,
      'y2': dataAreaBounds.y1,
      'x1': dataAreaBounds.x0,
      'x2': dataAreaBounds.x0,
      'class': 'axis'
    });
    svg.appendChild(line);

    // Define the tick values for the logarithmic scale
    let logTicks = [1e1, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13, 1e14, 1e15, 1e16, 1e17, 1e18, 1e19, 1e20, 1e21, 1e22, 1e23, 1e24, 1e25];

    // Draw ticks and labels
    for (let y of logTicks) {
        // Draw tick line
        let line = createSvgElement('line', {
            'x1': dataAreaBounds.x0 - 5,
            'x2': dataAreaBounds.x0,
            'y1': yScale.apply(y),
            'y2': yScale.apply(y),
            'class': 'tick',
        });
        svg.appendChild(line);

        // Draw tick label
        let text = createSvgElement('text', {
            'x': dataAreaBounds.x0 - 10,
            'y': yScale.apply(y),
            'text-anchor': 'end',
            'dominant-baseline': 'middle',
            'class': 'tick-label',
        }, {
            'textContent': y.toExponential()
        });
        svg.appendChild(text);
    }
}
