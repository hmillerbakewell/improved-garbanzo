# path-interpolate

A path interpolater.
Given a path returns data such as its length, and a set of evenly spaced waypoints along the path.
The spacing is guided by an optional argument.
An expected application for this is in interpolating a freehand-drawn path.

# Usage

~~~js
pathInterpolate = require("./path-interpolate")

pathInterpolate(inputPathString, interpolationDistance)
~~~

# Arguments

`inputPathString`: The path as a string in the form "x1 y1 x2 y2 ...".
This form was chosen as the easiest to reach from other forms.

`interpolationDistance`: The _preferred_ interpolation distance between the waypoints.
Defaults to `1`. The actual distance used will be either the given size or slightly larger,
to ensure an even spread of waypoints.

# Example


~~~js
pathInterpolate = require("./path-interpolate")

pathInterpolate("0 0 10 0 10 10 0 10", 5)
~~~

The above returns
~~~JSON
{ start: [ 0, 0 ],
  end: [ 0, 10 ],
  length: 30,
  bbox: [ 0, 0, 10, 10 ],
  waypoints:
   [ [ 0, 0 ],
     [ 5, 0 ],
     [ 10, 0 ],
     [ 10, 5 ],
     [ 10, 10 ],
     [ 5, 10 ],
     [ 0, 10 ] ] }
~~~
